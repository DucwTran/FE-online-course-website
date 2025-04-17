import { get, patch } from "../Utils/request";

export const getEnrolledLessionsByCourseId = async (id) => {
  const result = await get(`enrolledLessons?courseId=${id}`);
  return result;
};

export const patchProgressEnrolledLession = async (id, options) => {
  const result = await patch(`enrolledLessons/${id}`, options);
  return result;
};
