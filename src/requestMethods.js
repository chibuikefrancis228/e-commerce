import axios from "axios";

const BASE_URL = "http://localhost:4000";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGFjZGJkZDM0OWZlZWMwYmNhNWYzNCIsImlhdCI6MTcwMzU5NTQ4M30.ymJh7zZR0QHXMTQDMtZlmTm3M1U51vY2sjMyjhAcips"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
