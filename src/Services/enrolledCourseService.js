import { get } from "../Utils/request";


export const getAllEnrolledCourses = async (id) => {
  const result = await get(`courses/accepted?userId=${id}`);
  return result;
};
