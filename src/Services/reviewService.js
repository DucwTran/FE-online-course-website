import { get, post } from "../Utils/request"

export const getReviewById = async (id) => {
  const result = await get(`reviews?courseId=${id}`);
  return result;
}

export const postReview = async (options) => {
  const result = await post("reviews", options);
  return result;
}