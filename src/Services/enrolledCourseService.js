import { get, post } from "../Utils/request";

export const postEnrolledCourse = async (options) => {
  const result = await post("enrolledCourses", options);
  return result;
};


export const getAllEnrolledCourses = async (id) => {
  const result = await get(`enrolledCourses?userId=${id}`);
  return result;
};

export const getEnrolledCoursesById = async (id) => {
  const result = await get(`enrolledCourses/${id}`);
  return result;
};

export const getAllEnrolledCoursesByUserId = async (id) => {
  const result = await get(`enrolledCourses?userId=${id}`);
  return result;
};
