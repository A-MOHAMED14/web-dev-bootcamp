import ReactDOM from "react-dom/client";

import /* Todo: Import the required assets from 'react-router-dom' */ "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleThought from "./pages/SingleThought";

// Todo: Define the router object which will control the Provider's ability to display certain pages to match the proper URLs
const router = createBrowserRouter({
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/singleThought/:thoughtId",
      element: <SingleThought />,
    },
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
