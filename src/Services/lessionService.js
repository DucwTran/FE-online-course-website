import { post, get, patch, del } from "../Utils/request";

export const getLessionsById = async (id) => {
  const result = await get(`lessions?courseId=${id}`);
  return result;
};

export const createLession = async (options) => {
  const result = await post("lessions", options);
  return result;
};

export const updateLession = async (id, options) => {
  const result = await patch(`lessions/${id}`, options);
  return result;
};

export const deleteLession = async (id) => {
  const result = await del(`lessions/${id}`);
  return result;
};
