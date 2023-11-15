import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from "redux-thunk";
import { User } from "../models/user";
import { AnyAction } from "redux";
import { State } from "../models/task";
import { loginUser, signUpUser } from '../store/action/user';
import { Box, Button, Container, TextField, Typography } from "@mui/material";

interface LoginScreenProps extends RouteComponentProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({ location, history }) => {
    type DispatchType = ThunkDispatch<User, unknown, AnyAction>;

    const dispatch = useDispatch<DispatchType>();
    const state = useSelector((state: State) => state.user);
    const success = state.success;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const login = async () => {
        dispatch(loginUser(email, password));
    };

    const signUp = async () => {
        dispatch(signUpUser(name, email, password));
    };

    if (success === true) {
        history.push('/');
    }

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        {isSignUp ? "Sign Up" : "Login"}
                    </Typography>

                    {isSignUp && (
                        <TextField
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            label="Name"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                    )}

                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        label="Username"
                        type="username"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                    />

                    <Button
                        onClick={isSignUp ? signUp : login}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        {isSignUp ? "Sign Up" : "Login"}
                    </Button>

                    <Button onClick={toggleSignUp} color="secondary">
                        {isSignUp ? "Back to Login" : "Sign Up"}
                    </Button>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default LoginScreen;
