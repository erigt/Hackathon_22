import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import AddForm from "../pages/AddForm";
import Vip from "../pages/Vip";
import VideoIntro from "../pages/Video";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />
  },
  {
    path: "/addform",
    element: <AddForm />
  },
  {
    path: "/vip",
    element: <Vip />
  },
  {
    path: "/video",
    element: <VideoIntro />
  }
]);
