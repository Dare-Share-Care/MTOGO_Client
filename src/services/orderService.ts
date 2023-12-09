// orderService.ts
import axios from "axios";
import authService from "./authService";

const URL = 'http://localhost:5157';

interface OrderData 
{
    // Define the properties of OrderData here
}

interface CreateOrderResponse 
{
    id: number; // Assuming the response includes an 'id' field.
    // Define other properties of the response here
}

const api = () => 
{
    const createOrder = async (orderData: OrderData): Promise<CreateOrderResponse> => 
    {
        try 
        {
            const token = authService.getToken();
            if (!token) 
            {
                throw new Error('Token not found');
            }

            const response = await axios.post<CreateOrderResponse>(`${URL}/api/Order/create`, orderData, 
            {
                headers: 
                {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } 
        catch (error) 
        {
            if (axios.isAxiosError(error) && error.response) 
            {
                // Handle HTTP error status code
                throw new Error(`Error creating order: ${error.response.status}`);
            } 
            else 
            {
                // Handle unexpected errors
                throw new Error('Error creating order');
            }
        }
    };

    return {
        createOrder
    };
};

export default api();
