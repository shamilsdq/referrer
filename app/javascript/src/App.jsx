import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import {
    setDefaultHeaders,
    setAuthHeaders,
    registerIntercepts,
} from "./apis/axios";
import Loader from "./components/Common/Loader";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const authToken = localStorage.getItem("authToken");
    const hasAuthToken = !!authToken;

    useEffect(() => {
        registerIntercepts();
        setDefaultHeaders();
        if (authToken) setAuthHeaders(authToken);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container maxWidth="md" sx={{ height: "100%" }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={hasAuthToken ? <Navigate to="/" /> : <Login />}
                    />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
