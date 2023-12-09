import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import restaurantService from '../services/restaurantService';
import orderService from '../services/orderService';

// Define the structure of a menu item
interface MenuItem {
    id: number;
    name: string;
    price: number;
    // Add other properties as needed
}

// Define the structure of order data
interface OrderData {
    restaurantId: number;
    userEmail: string;
    deliveryAddress: {
        street: string;
        city: string;
        zipCode: string;
    };
    lines: Array<{
        menuItemId: number;
        quantity: number;
    }>;
    // Add other properties as required by your API
}

interface RouteParams {
    restaurantId: string;
    [key: string]: string;
}

const MenuView: React.FC = () => {
    const { restaurantId } = useParams<RouteParams>();
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [orderConfirmation, setOrderConfirmation] = useState<string>('');

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const menuData: MenuItem[] = await restaurantService.getMenuByRestaurantId(restaurantId || '') as MenuItem[];
                setMenu(menuData);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('An unknown error occurred');
                }
            }
        };

        fetchMenu();
    }, [restaurantId]);

    const handleOrder = async (menuItemId: number) => {
        const orderData: OrderData = {
            restaurantId: parseInt(restaurantId || '0'), // Convert string to number
            userEmail: "j@j.j", // Replace with actual user email
            deliveryAddress: {
                street: "test street",
                city: "test City",
                zipCode: "12345"
            },
            lines: [{
                menuItemId: menuItemId,
                quantity: 1 // Example quantity
            }],
            // Include other necessary fields
        };

        try {
            const response = await orderService.createOrder(orderData);
            console.log('Order created:', response);
            // If order is successful, set the order confirmation message
            setOrderConfirmation(`Order #${response.id} created successfully!`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error('An unknown error occurred');
            }
        }
    };

    return (
        <div className="container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="row">
                        {menu.map(item => (
                            <div className="col-lg-4 col-md-6 mt-4 mb-4" key={item.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">DKK {item.price},-</p>
                                        <button className="btn btn-primary" id={`order-now-${item.id}`} onClick={() => handleOrder(item.id)}>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {orderConfirmation && (
                        <div id="order-confirmation" className="alert alert-success" role="alert">
                            {orderConfirmation}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MenuView;
