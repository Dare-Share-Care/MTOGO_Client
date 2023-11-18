
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(4),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    input: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const Register = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform registration logic here
    };

    return (
        <div className={classes.root}>
            <Typography variant="h2">Register</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.input}
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <TextField
                    className={classes.input}
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <TextField
                    className={classes.input}
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <Button className={classes.button} variant="contained" color="primary" type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Register;
