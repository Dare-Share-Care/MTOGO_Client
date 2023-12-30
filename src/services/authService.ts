import axios from 'axios';

const URL = 'http://orders-web:8085';

const api = () => {
    const login = async (email: string, password: string): Promise<string> => {
        try {
            const response = await axios.post<string>(`${URL}/api/Auth/login`,
                {
                    email,
                    password,
                });
            const token = response.data;
            if (token) {
                localStorage.setItem('token', token);
                return token;
            }
            else {
                throw new Error('Invalid token received');
            }
        }
        catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = (): void => {
        localStorage.removeItem('token');
    };

    const getToken = (): string | null => {
        return localStorage.getItem('token');
    };

    return {
        login,
        logout,
        getToken,
    };
};

export default api();
