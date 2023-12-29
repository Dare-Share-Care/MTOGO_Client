import axios from "axios";
import authService from "./authService";
import { IOrderData } from '../interfaces/IOrderData';
import { ICreateOrderResponse } from '../interfaces/ICreateOrderResponse';
import { IOrderToClaimViewModel } from '../interfaces/IOrderToClaimViewModel';

const ORDER_SERVICE_URL = 'http://localhost:5157'; // Orders.Web
const COURIER_SERVICE_URL = 'http://localhost:5041'; // Courier.Web

const api = () => {
    const createOrder = async (orderData: IOrderData): Promise<ICreateOrderResponse> => {
        const token = authService.getToken();
        if (!token) {
            throw new Error('Token not found');
        }

        const response = await axios.post<ICreateOrderResponse>(`${ORDER_SERVICE_URL}/api/Order/create`, orderData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    };

    const getAvailableOrders = async (): Promise<IOrderToClaimViewModel[]> => {
        const token = authService.getToken();
        if (!token) {
            throw new Error('Token not found');
        }

        const response = await axios.get<IOrderToClaimViewModel[]>(`${ORDER_SERVICE_URL}/api/Order/ready-for-delivery`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    };

    const claimOrder = async (orderId: number, courierId: number, deliveryAddress: string): Promise<void> => {
        const token = authService.getToken();
        if (!token) {
            throw new Error('Token not found');
        }

        await axios.post(`${COURIER_SERVICE_URL}/api/Courier/claim-order`, {
            orderId,
            courierId,
            deliveryAddress
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    return {
        createOrder,
        getAvailableOrders,
        claimOrder,
    };
};

export default api();
