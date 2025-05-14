import { get, del, post, put } from "../Utils/request";

export const login = async (options) => { 
  const result = await post(`accounts/login`, options);
  return result;
};


export const getStudent = async () => {
  const result = await get(`accounts/users?role=student`);
  return result;
};

export const getAdmin = async () => {
  const result = await get(`accounts/users?role=admin`);
  return result;
};

export const getDetailUser = async (id) => {
  const result = await get(`accounts/user/${id}`);
  return result;
};

export const updateUser = async (id, options) => {
  const result = await put(`users/${id}`, options);
  return result;
};

export const deleteUser = async (id) => {
  const result = await del(`accounts/${id}`);
  return result;
};


export const createAccount = async (options) => {
  const result = await post("accounts/register", options);
  return result;
};
