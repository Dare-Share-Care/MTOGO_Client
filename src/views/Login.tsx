import React, { useState } from 'react';
import authService from '../services/authService'; // Assuming this is your custom authentication service
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => 
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        try 
        {
            const response = await authService.login(email, password);
            console.log('Login successful!', response);
            // Call the onLogin function passed from parent and navigate to the front page
            onLogin();
            navigate('/'); // Replace with your desired route
        } 
        catch (error) 
        {
            setError('Login failed. Please check your credentials.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className='login-container'>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <label htmlFor="password">Password:</label>
                <input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" id="login-button">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            {/* Additional links like reset password or registration can be added here */}
        </div>
    );
};

export default Login;