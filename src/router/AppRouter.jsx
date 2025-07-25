import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import MyBlogs from "../pages/user_pages/MyBlogs";
import Profile from "../pages/user_pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogCardDetail from "../components/cards/BlogCardDetail";

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
        path: "/blogcardetail",
        element: <BlogCardDetail />,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
