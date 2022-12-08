import React, { useState } from "react";
import { Box } from "@mui/material";

import Form from "./Form";
import usersApi from "../../apis/users";
import { generatePayload, storeAuthData } from "./utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const payload = generatePayload(event.currentTarget);
            const { data } = await usersApi.signIn(payload);
            storeAuthData(data);
            navigate("/");
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Form handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </Box>
    );
};

export default Login;
