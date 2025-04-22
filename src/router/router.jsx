import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
      ]}])