import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import AddForm from "../pages/AddForm";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: `/details/:id`,
        element: <Details/>
    },
    {
        path: "/addform",
        element: <AddForm/>
    }
  ]);