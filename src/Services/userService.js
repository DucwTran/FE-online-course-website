import { get, patch, del, post } from "../Utils/request";

export const login = async (email, password = "") => { // không cần check, chỉ truyền rồi BE xử lý
  let pass = "";
  if (password !== "") {
    pass = `&password=${password}`;
  }
  const result = await get(`users?email=${email}${pass}`);
  return result;
};

export const updateLastLogin = async (id, options) => { //thừa,  đã làm ở BE
  const result = await patch(`users/${id}`, options);
  return result;
};

export const getAllUsers = async () => {
  const result = await get(`users`);
  return result;
};

export const getStudent = async () => {
  const result = await get(`users?role=student`);
  return result;
};

export const getAdmin = async () => {
  const result = await get(`users?role=admin`);
  return result;
};

export const getDetailUser = async (id) => {
  const result = await get(`users?id=${id}`);
  return result;
};

export const updateUser = async (id, options) => {
  const result = await patch(`users/${id}`, options);
  return result;
};

export const deleteUser = async (id) => {
  const result = await del(`users/${id}`);
  return result;
};

export const checkExist = async (key, value) => { // thừa, đã check ở BE
  const result = await get(`users?${key}=?${value}`); // cái này như kiểu filter
  return result;
};

export const createAccount = async (options) => {
  const result = await post("users", options);
  return result;
};
