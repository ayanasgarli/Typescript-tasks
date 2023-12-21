import Home from "../pages/User/Home/index";
import Login from "../pages/User/Login/index";
import NotFound from "../pages/NotFound/index";
import Register from "../pages/User/Register/index";
import UserRoot from "../pages/User/UserRoot/index";

export const ROUTES = [
    {
      path: "/",
      element: <UserRoot />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];