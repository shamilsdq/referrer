import React from "react";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const Form = ({ handleSubmit, isSubmitting }) => (
    <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "400px" }}
    >
        <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            size="small"
            autoComplete="email"
            margin="normal"
            autoFocus
        />
        <TextField
            required
            id="password"
            name="password"
            type="password"
            label="Password"
            size="small"
            autoComplete="current-password"
            margin="normal"
        />
        <LoadingButton
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isSubmitting}
            loadingIndicator="Signing in..."
        >
            Sign In
        </LoadingButton>
    </Box>
);

export default Form;
