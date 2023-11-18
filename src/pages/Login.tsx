
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username && password) {
      // Perform necessary actions (e.g., API calls, authentication logic)
      // You can replace the console.log with your own logic
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      setError('Please fill in both fields');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
