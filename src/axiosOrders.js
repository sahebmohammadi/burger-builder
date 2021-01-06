import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-62d6c-default-rtdb.firebaseio.com",
});

export default instance;
