import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Bret"
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

export default userSlice.reducer;