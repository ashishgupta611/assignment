import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    email: string,
    password: string
}

const initialState: UserState = {
    email: '',
    password: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action:PayloadAction<UserState>)=> {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        clearCredentials: (state)=> initialState,
    },
});

export const { setCredentials, clearCredentials } = userSlice.actions;
export default userSlice.reducer;