import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Brut"
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

export default userSlice.reducer;