import React from "react";

import { Provider } from "react-redux";
import store from "./store/index";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./common/Root";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      id: "root",
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "blog", element: <Blog /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
