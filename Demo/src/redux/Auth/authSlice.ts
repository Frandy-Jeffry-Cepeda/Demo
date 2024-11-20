import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DraftUserAuth, AuthLogin } from "../../types"; // Assuming this is defined elsewhere

type State = {
  users: DraftUserAuth[];
  loggedInUser: AuthLogin | null; 
  isAuthenticated: boolean;
  currentId: number 
};

const initialState: State = {
  users: [],
  loggedInUser: null, 
  isAuthenticated: false, 
  currentId: 0
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<DraftUserAuth>) => {
      state.users.push(action.payload);
      state.currentId + 1
    },
    loginUser: (state, action: PayloadAction<AuthLogin>) => {
        state.loggedInUser = action.payload; 
        state.isAuthenticated = true; 
    }
  },
});

export const { createUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
