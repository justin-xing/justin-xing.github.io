import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name: 'dark',
    initialState: { darkMode: false },
    reducers: {
        toggleMode(state) {
            state.darkMode = !state.darkMode;
        },
    },
});

export default darkSlice.reducer;

export const darkActions = darkSlice.actions;