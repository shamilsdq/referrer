import React from "react";
import { Box, Typography } from "@mui/material";

import Form from "./Form";

const Login = () => {
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
            <Form handleSubmit={() => {}} />
        </Box>
    );
};

export default Login;
