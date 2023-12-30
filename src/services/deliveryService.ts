import axios from "axios";
import authService from "./authService";
import { IDelivery } from '../interfaces/IDelivery';

const URL = 'http://gateway:8000'; // Replace with your actual backend port

const api = () => {
    const getAllDeliveries = async (): Promise<IDelivery[]> => {
        try {
            const token = authService.getToken();
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.get<IDelivery[]>(`${URL}/api/courier/deliveries`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(`Error fetching deliveries: ${error.response.status}`);
            } else {
                throw new Error('Error fetching deliveries');
            }
        }
    };

    return {
        getAllDeliveries,
    };
};

export default api();
