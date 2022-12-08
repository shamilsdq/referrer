import React from "react";
import { CircularProgress, Container } from "@mui/material";

const Loader = () => (
    <Container
        sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <CircularProgress />
    </Container>
);

export default Loader;
