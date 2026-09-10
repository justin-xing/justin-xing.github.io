import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useDispatch, useSelector } from "react-redux";

import { darkActions } from "../../../../store/darkMode";

const ThemeToggle = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => dispatch(darkActions.toggleMode())}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      sx={{ color: "var(--text)" }}
    >
      {darkMode ? (
        <LightModeOutlinedIcon fontSize="small" />
      ) : (
        <DarkModeOutlinedIcon fontSize="small" />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
