import axios from "axios";

axios.defaults.baseURL = "/api/";

const setDefaultHeaders = () => {
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
};

const setAuthHeaders = (authToken) => {
    if (authToken) {
        localStorage.setItem("authToken", authToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    }
};

const clearAuthHeaders = () => {
    localStorage.removeItem("authToken");
    if (axios.defaults.headers.common?.["Authorization"])
        delete axios.defaults.headers.common["Authorization"];
};

const handleSuccessResponse = (response) => response;

const handleErrorResponse = (errorObject) => {
    if (errorObject.response?.status === 401) {
        clearAuthHeaders();
        setTimeout(() => (window.location.href = "/login"), 2000);
    }
    return Promise.reject(errorObject);
};

const registerIntercepts = () =>
    axios.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export {
    setDefaultHeaders,
    setAuthHeaders,
    clearAuthHeaders,
    registerIntercepts,
};
