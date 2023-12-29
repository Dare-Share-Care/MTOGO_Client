import React, { useEffect, useState } from 'react';
import orderService from '../services/orderService';
import { IOrderToClaimViewModel } from '../interfaces/IOrderToClaimViewModel';
import jwt_decode from "jwt-decode";
import authService from '../services/authService';

const AvailableOrders: React.FC = () => {
    const [orders, setOrders] = useState<IOrderToClaimViewModel[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const availableOrders = await orderService.getAvailableOrders();
                setOrders(availableOrders);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);

    const getCurrentCourierId = async () => {
        const token = authService.getToken();
        if (!token) return null;

        try {
            const decodedToken = jwt_decode<any>(token);
            return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        } catch (error) {
            console.error("Error decoding token", error);
            return null;
        }
    }; 

    const handleClaimOrder = async (order: IOrderToClaimViewModel) => {
        try {
            const courierId = await getCurrentCourierId();
            if (courierId != null) {
                const deliveryAddress = `${order.deliveryAddress.street}, ${order.deliveryAddress.city}`;
                await orderService.claimOrder(order.id, courierId, deliveryAddress);
                setOrders(prevOrders => prevOrders.filter(o => o.id !== order.id));
            } else {
                console.log('No courier ID found');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {/* ... */}
            {orders.map(order => (
                <li key={order.id}>
                    Order ID: {order.id}, Address: {order.deliveryAddress.street}, {order.deliveryAddress.city}
                    <button onClick={() => handleClaimOrder(order)}>Claim Order</button>
                </li>
            ))}
        </div>
    );
};

export default AvailableOrders;
