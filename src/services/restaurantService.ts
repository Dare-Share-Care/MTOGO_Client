import axios from "axios";

const URL = 'http://restaurant-web:8081';

// Define the structure of a restaurant.
interface Restaurant {
    // Add properties of a restaurant here
}

// Define the structure of a restaurant's menu.
interface RestaurantMenu {
    // Add properties of the menu here
}

const api = () => {
    const getAllRestaurants = async (): Promise<Restaurant[]> => {
        try {
            const response = await axios.get<Restaurant[]>(URL + '/api/Restaurant/get-all-restaurants');
            return response.data;
        }
        catch (error) {
            throw new Error('Error fetching restaurants');
        }
    };

    const getMenuByRestaurantId = async (restaurantId: string): Promise<RestaurantMenu> => {
        try {
            const response = await axios.get<RestaurantMenu>(`${URL}/api/Restaurant/${restaurantId}/menu`);
            return response.data;
        }
        catch (error) {
            throw new Error('Error fetching restaurant menu');
        }
    };

    return {
        getAllRestaurants,
        getMenuByRestaurantId
    };
};

export default api();
