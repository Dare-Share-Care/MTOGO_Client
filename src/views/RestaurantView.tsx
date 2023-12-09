import React, { useEffect, useState } from 'react';
import restaurantService from '../services/restaurantService';
import { useNavigate } from 'react-router-dom';

// Define the structure of a restaurant
interface Restaurant {
    id: number;
    name: string;
    description: string;
    // Add other properties as needed
}

const RestaurantView: React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const fetchedRestaurants = await restaurantService.getAllRestaurants();
                setRestaurants(fetchedRestaurants as Restaurant[]);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('An unknown error occurred');
                }
                // Handle error fetching restaurants here
            }
        };

        fetchRestaurants();
    }, []);

    const handleButtonClick = (restaurantId: number) => {
        navigate(`/menu/${restaurantId}`);
        // Handle button click for the specific restaurant
    };

    return (
        <div className="container">
            <div className="row">
                {restaurants.map(restaurant => (
                    <div className="col-12 mt-3 mb-3" key={restaurant.id}>
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <p className="card-text">{restaurant.description}</p>
                                <button className="btn btn-primary" id={`see-menu-${restaurant.id}`} onClick={() => handleButtonClick(restaurant.id)}>See menu</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantView;
