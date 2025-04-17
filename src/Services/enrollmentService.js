import { get, del, patch, post } from "../Utils/request"

export const getAllEnrollments = async () => {
  const result = await get("enrollments");
  return result;
}

export const getDetailEnrollment = async (id) => {
  const result = await get(`enrollments/${id}`);
  return result;
}

export const deleteEnrollments = async (id) => {
  const result = await del(`enrollments/${id}`);
  return result;
}

export const patchEnrollment = async (id, options) => {
  const result = await patch(`enrollments/${id}`, options);
  return result;
}

export const postEnrollment = async (options) => {
  const result = await post("enrollments", options)
  return result;
}