import http from "./axios";

const login = (data) => {
  return http.post("/login", data);
};
const forgot = (data) => {
    return http.post("/forgot", data);
  };
export default { login,forgot };
