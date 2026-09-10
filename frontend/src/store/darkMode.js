import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "theme";

// The boot script in public/index.html already resolved the theme and stamped
// it on <html> before first paint, so read it back rather than recomputing.
const initialDarkMode = () => {
  if (typeof document === "undefined") return false;
  return document.documentElement.getAttribute("data-theme") === "dark";
};

const apply = (darkMode) => {
  document.documentElement.setAttribute(
    "data-theme",
    darkMode ? "dark" : "light"
  );
  try {
    localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light");
  } catch (e) {
    // Storage can be blocked; the attribute above still themes this session.
  }
};

const darkSlice = createSlice({
  name: "dark",
  initialState: { darkMode: initialDarkMode() },
  reducers: {
    toggleMode(state) {
      state.darkMode = !state.darkMode;
      apply(state.darkMode);
    },
  },
});

export default darkSlice.reducer;

export const darkActions = darkSlice.actions;
