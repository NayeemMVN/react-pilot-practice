import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Landing from "./Landing";
import Post from "./Post";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/posts",
        element: <Post />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
