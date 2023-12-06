import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would handle the login logic, probably sending a request to your backend
    console.log('Login attempted with', username, password);
    onLogin(); // Call the onLogin function passed from App.tsx
  };

  return (
    <div className='login-container'>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
      {/* You can also include links to reset password or to the registration page */}
    </div>
  );
};

export default Login;
