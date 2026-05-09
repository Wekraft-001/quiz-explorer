import axios from "axios";

const API_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;

export const fetchGuestQuiz = async (sessionId: string, ageRange: string) => {
  const { data } = await axios.post(`${API_BASE}/ai/guest/quiz`, {
    sessionId,
    ageRange,
  });
  return data;
};

export const submitGuestQuiz = async (
  quizId: string,
  sessionId: string,
  answers: number[],
) => {
  const { data } = await axios.post(`${API_BASE}/ai/guest/quiz/submit`, {
    quizId,
    sessionId,
    answers,
  });
  return data;
};
