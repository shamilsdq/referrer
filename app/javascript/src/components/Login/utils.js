const generatePayload = (form) => {
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    return { user: { email, password } };
};

const storeAuthData = ({ user: { email, token } }) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("authEmail", email);
};

export { generatePayload, storeAuthData };
