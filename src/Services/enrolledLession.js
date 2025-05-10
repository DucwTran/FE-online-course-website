import { get, patch } from "../Utils/request";

export const postEnrolledLession = async (options) => { // thừa rồi nha
  const result = await patch("enrolledLessions", options);
  return result;
};

export const getEnrolledLessionsById = async (id) => { // thừa, là getLessionsById
  const result = await get(`enrolledLessions?courseId=${id}`);
  return result;
};

export const patchEnrolledLession = async (id, options) => { // học hay chưa, là ở mark
  const result = await patch(`enrolledLessions/${id}`, options);
  return result;
};
