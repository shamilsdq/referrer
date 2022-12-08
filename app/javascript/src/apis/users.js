import axios from "axios";

const signIn = async (payload) => axios.post("users/sign_in", payload);

const usersApi = { signIn };
export default usersApi;
