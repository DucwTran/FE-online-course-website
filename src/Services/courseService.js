import { post, get, patch, del } from "../Utils/request";

export const getAllCourses = async () => {
  const result = await get("courses");
  return result;
};

export const getAllCoursesNotEnroll = async () => { //chưa dùng
  const result = await get("coursesNotEnroll");
  return result;
};

export const createCourse = async (options) => {
  const result = await post("courses", options);
  return result;
};

export const getDetailCourse = async (id) => {
  const result = await get(`courses/${id}`);
  return result;
};

export const updateCourse = async (id, options) => {
  const result = await patch(`courses/${id}`, options);
  return result;
};

export const deleteCourse = async (id) => {
  const result = await del(`courses/${id}`);
  return result;
};

