import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { MemoryGamePage } from "./pages/memoryGamePage/MemoryGamePage";
import { QuizGamePage } from "./pages/quizGamePage/QuizGamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/memory-game",
    element: <MemoryGamePage />,
  },
  {
    path: "/quiz-game",
    element: <QuizGamePage />,
  },
  // {
  //   path: '*',
  //   element:
  // }
]);
