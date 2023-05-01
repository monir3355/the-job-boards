import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import JobDetails from "./Components/JobDetails";
import Statistics from "./Components/Statistics";
import Applied from "./Components/Applied";
import ErrorPage from "./Components/ErrorPage";
import { jobsDataFetch } from "./loader/loader";
import Blog from "./Components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: jobsDataFetch,
      },
      {
        path: "/detail/:detailId",
        element: <JobDetails />,
        loader: jobsDataFetch,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied",
        element: <Applied />,
        loader: jobsDataFetch,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: jobsDataFetch,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
