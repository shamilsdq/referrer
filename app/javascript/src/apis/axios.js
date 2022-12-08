import axios from "axios";

axios.defaults.baseURL = "/api/";

const configureHeaders = (setLoading = () => null) => {
    axios.defaults.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    const token = localStorage.getItem("authToken");
    if (token) axios.defaults.headers["X-Auth-Token"] = token;

    setLoading(false);
};

export { configureHeaders };
