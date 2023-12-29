import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import deliveryService from '../services/deliveryService';
import { IDelivery } from '../interfaces/IDelivery';

// Define a default center position for the map
const defaultPosition: [number, number] = [55.771605,   12.476061]; // Replace with your default center position

const DeliveryMap: React.FC = () => {
    const [deliveries, setDeliveries] = useState<IDelivery[]>([]);
    const [mapCenter, setMapCenter] = useState<[number, number]>(defaultPosition);

    useEffect(() => {
        const fetchDeliveries = async () => {
            try {
                const data = await deliveryService.getAllDeliveries();
                setDeliveries(data);
                // Set map center to the first delivery's position if available
                if (data.length > 0 && data[0].latitude && data[0].longitude) {
                    setMapCenter([data[0].latitude, data[0].longitude]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchDeliveries();
    }, []);

    useEffect(() => {
        const fetchDeliveries = async () => {
            try {
                const data = await deliveryService.getAllDeliveries();
                console.log("Deliveries:", data); // Check the data in the console
                setDeliveries(data);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchDeliveries();
    }, []);    

    const customIcon = new L.Icon({
        iconUrl: require('../img/logo.png'), // Update the path to your marker icon
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

    return (
        <MapContainer center={mapCenter} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            {deliveries.map(delivery => (
                delivery.latitude && delivery.longitude && (
                <Marker
                    key={delivery.id}
                    position={[delivery.latitude, delivery.longitude]}
                    icon={customIcon}
                  >
                        <Popup>
                            Delivery ID: {delivery.id}
                            {/* Add more details if needed */}
                        </Popup>
                    </Marker>
                )
            ))}
        </MapContainer>
    );
};

export default DeliveryMap;
