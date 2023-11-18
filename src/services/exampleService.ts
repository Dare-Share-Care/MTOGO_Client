import api from './api';
import { Example } from '../models/Example';

export const fetchExample = async (): Promise<Example[]> => {
    try {
        const response = await api.get<Example[]>('/example');
        return response.data;
    } catch (error) {
        console.error('Error fetching example:', error);
        throw error;
    }
};