import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import MyBlogs from "../pages/user_pages/MyBlogs";
import Profile from "../pages/user_pages/Profile";
import Logout from "../pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/newblog",
        element: <NewBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/myblogs",
        element: <MyBlogs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
