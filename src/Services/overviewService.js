import { get } from "../Utils/request";

export const getOverview = async () => {
  const overview = await get("systemOverview");
  return overview;
};
