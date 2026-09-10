import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { Provider } from "react-redux";
import store from "./store/index";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./common/Root";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog/BlogPost";
// MUI components (Drawer, IconButton, Button) come from the default light
// theme unless told otherwise, so keep its palette in step with ours.
const Themed = ({ children }) => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const theme = useMemo(
    () => createTheme({ palette: { mode: darkMode ? "dark" : "light" } }),
    [darkMode]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

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
        { path: "blog/:slug", element: <BlogPost /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <Themed>
        <RouterProvider router={router} />
      </Themed>
    </Provider>
  );
}

export default App;
