import React from 'react';
import AvailableOrders from '../components/AvailableOrders';
import DeliveryMap from '../components/DeliveryMap'; // Assuming you have this component from previous steps

const CourierDashboard: React.FC = () => {
  return (
    <div>
      <h2>Courier Dashboard</h2>
      <p>Here you can manage your deliveries and view your performance metrics.</p>
      <AvailableOrders />
      <DeliveryMap />
    </div>
  );
};

export default CourierDashboard;
