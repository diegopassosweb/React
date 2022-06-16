import axios from "axios";

export const api = axios.create({
    baseURL: "httpL://localhost:3000",
});

export const createSession = async (email, passowrd) => {
    return api.post("/sessions", {email, passowrd});
};

export const getUsers = async() => {
    return api.get("/users");
};