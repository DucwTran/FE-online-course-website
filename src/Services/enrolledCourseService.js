import { get, post, patch } from "../Utils/request";

export const postEnrolledCourse = async (options) => { // thừa, do enrollment mà acp thì get course đã đăng kí ra thôi
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

export const patchEnrolledCourse = async (id, options) => {
  const result = await patch(`enrolledCourses/${id}`, options);
  return result;
}