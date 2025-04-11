import { get } from "../Utils/request"

export const getAllCourses = async () => {
  const result = await get("courses");
  return result;
}

export const getDetailCourse = async (id) => {
  const result = await get(`courses/${id}`);
  return result;
}