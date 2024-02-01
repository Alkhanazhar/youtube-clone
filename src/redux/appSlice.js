import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        searchResults: []
    },
    reducers: {
        toggleIsMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        toggleFalse: (state) => {
            state.isMenuOpen = false;
        },
        addSearch: (state, action) => {
            state.searchResults = action.payload
        }
    }
})
export const { toggleIsMenuOpen, toggleFalse, addSearch } = appSlice.actions
export default appSlice.reducer;