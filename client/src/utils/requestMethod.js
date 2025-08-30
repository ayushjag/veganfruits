import axios from "axios";

const BASE_URL = "https://vegan-food-012z.onrender.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWM5YzRmNGE3NGRlYzVmNTJlNDE3YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDA3NzYyOCwiZXhwIjoxNzEwMzM2ODI4fQ.nkLNIJJmYAPBBBIS8NyToydel1ty4k2sLQGjO3skJyY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
