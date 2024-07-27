import { createBrowserRouter } from "react-router-dom";
import Login from "../view/login/Login";
import LoginForm from "../view/login/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login-form",
    element: <LoginForm />,
  },
  {
    path:"/",
    
  }
]);

export default router;
