import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPost: 'Brut',
    loading: false,
    error: false
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.currentPost = action.payload;
        },
        fetchFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
});

export const {fetchStart, fetchSuccess, fetchFailure} = postSlice.actions
export default postSlice.reducer;