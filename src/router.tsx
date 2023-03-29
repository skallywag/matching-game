import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { MemoryGamePage } from "./pages/memoryGamePage/MemoryGamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/memory-game",
    element: <MemoryGamePage />,
  },
  // {
  //   path: '*',
  //   element:
  // }
]);
