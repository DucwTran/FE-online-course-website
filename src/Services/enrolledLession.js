import { patch } from "../Utils/request";

export const patchEnrolledLession = async (id, options) => {
  const result = await patch(`enrolledLessions/${id}`, options);
  return result;
};
