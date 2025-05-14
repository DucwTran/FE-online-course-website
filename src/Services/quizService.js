import { get, post, del, patch } from "../Utils/request"

export const updateQuestion = async (id, options) => {
  // cập nhật câu hỏi
  const result = await patch(`quizzes/questions/${id}`, options);
  return result;
}

export const createQuestion = async (options) => {
  // tạo câu hỏi
  const result = await post("quizzes/questions", options);
  return result;
}

export const postAnswerUser = async (options) => {
  // user nộp bài
  const result = await post("answers", options);
  return result;
};

export const getAnswerByIdAnswerOfUser = async (id) => {
  //lấy answer của user theo id của answer
  const result = await get(`answers/${id}`);
  return result;
};

export const getAllAnswerOfQuiz = async () => {
  //lấy tất cả answer 
  const result = await get(`answers`);
  return result;
}

export const getAllAnswerOfUser = async (id) => {
  //lấy tất cả answer của user
  const result = await get(`answers/user?userId=${id}`);
  return result;
};

export const getQuizById = async (id) => { 
  const result = await get(`quizzes/${id}`);
  return result;
}

export const getAllQuiz = async () => { //lấy tất cả quiz
  const result = await get("quizzes/all");
  return result;
}

export const deleteQuiz = async (id) => { //xóa quiz
  const result = await del(`quizzes/${id}`);
  return result;
}

export const updateQuiz = async (id, options) => { //cập nhật quiz 
  const result = await patch(`quizzes/${id}`, options);
  return result;
}

export const createQuiz = async (options) => { //tạo quiz 
  const result = await post("quizzes", options);
  return result;
}