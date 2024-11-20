import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DraftUserAuth, AuthLogin } from "../../types"; 

type State = {
  users: DraftUserAuth[];
  loggedInUser: AuthLogin | null; 
  isAuthenticated: boolean;
};

const initialState: State = {
  users: [],
  loggedInUser: null, 
  isAuthenticated: false, 
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<DraftUserAuth>) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action: PayloadAction<AuthLogin>) => {
        state.loggedInUser = action.payload; 
        state.isAuthenticated = true; 
    }
  },
});

export const { createUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
