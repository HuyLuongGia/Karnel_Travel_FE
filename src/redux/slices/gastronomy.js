import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gasCentral: {},
};

const gastronomy = createSlice({
    name: "gastronomy",
    initialState,
    reducers: {
        handelGetValue: (state, action) => {
            console.log(state);
            console.log(action);
        },
    },
});

export const { handelGetValue } = gastronomy.actions;

export default gastronomy.reducer;
