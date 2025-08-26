import axios from "axios";


const API_BASE = import.meta.env.VITE_REACT_APP_BASE_URL;
export const fetchQuiz = async (sessionId: string, ageRange: string) => {
  const { data } = await axios.post(`${API_BASE}/ai/guest/quiz`, {
    sessionId,
    ageRange,
  });
  return data;
};

export const submitQuiz = async (
  sessionId: string,
  quizId: string,
  answers: { phaseIndex: number; questionIndex: number; answer: string }[]
) => {
  const { data } = await axios.post(`${API_BASE}/ai/guest/quiz/submit`, {
    sessionId,
    quizId,
    answers,
  });
  return data;
};
