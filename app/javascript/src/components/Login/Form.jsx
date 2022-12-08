import React from "react";
import { Box, TextField, Button } from "@mui/material";

const Form = ({ handleSubmit }) => (
    <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", mt: 3 }}
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
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
        </Button>
    </Box>
);

export default Form;
