import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Root from "../layouts/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        {path:"/login", Component: Login},
        {path:"/register", Component: Register}
      ]}])