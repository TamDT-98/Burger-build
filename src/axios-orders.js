import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-85868-default-rtdb.firebaseio.com/",
});

export default instance;
