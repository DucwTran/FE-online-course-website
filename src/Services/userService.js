import { get } from "../Utils/request";

export const login = async (email, password = "") => {
  let pass = "";
  if (password !== "") {
    pass = `&password=${password}`;
  }
  const result = await get(`users?email=${email}${pass}`);
  return result;
};
