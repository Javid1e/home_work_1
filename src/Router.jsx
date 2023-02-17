import { createBrowserRouter } from "react-router-dom";
import Guest from "./Views/Guest";
import Default from "./Views/Default";
import Q1 from "./Views/q1";
import Q2 from "./Views/q2";
import Q3 from "./Views/q3";
import Q4 from "./Views/q4";
import Q5 from "./Views/q5";
import Q6 from "./Views/q6";
import Q7 from "./Views/q7";
import Q8 from "./Views/q8";
import NotFound from "./Views/NotFound";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
  },
  {
    path: "/answers",
    element: <Default />,
    children: [
      {
        path: "q1",
        element: <Q1 />,
      },
      {
        path: "q2",
        element: <Q2 />,
      },
      {
        path: "q3",
        element: <Q3 />,
      },
      {
        path: "q4",
        element: <Q4 />,
      },
      {
        path: "q5",
        element: <Q5 />,
      },
      {
        path: "q6",
        element: <Q6 />,
      },
      {
        path: "q7",
        element: <Q7 />,
      },
      {
        path: "q8",
        element: <Q8 />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default Router;
