import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { configureHeaders } from "./apis/axios";

import Loader from "./components/Common/Loader";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Container } from "@mui/material";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => configureHeaders(setIsLoading), []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container maxWidth="md" sx={{ height: "100%" }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
