import { get } from "../Utils/request";

export const login = async (email, password = "") => {
  let pass = "";
  if (password !== "") {
    pass = `&password=${password}`;
  }
  const result = await get(`users?email=${email}${pass}`);
  return result;
};


export const getStudent = async () => {
  const result = await get(`users?role=student`);
  return result;
}

export const getAdmin = async () => {
  const result = await get(`users?role=admin`);
  return result;
}

