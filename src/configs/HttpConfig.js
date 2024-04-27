import axios from "axios";

console.log(process.env.REACT_APP_TODOORS_API);
export const TodoorsHttp = axios.create({
  baseURL: process.env.REACT_APP_TODOORS_API,
});

export default TodoorsHttp;
