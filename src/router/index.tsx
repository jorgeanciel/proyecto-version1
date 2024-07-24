import { createBrowserRouter } from "react-router-dom";
import Login from "../view/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default router;
