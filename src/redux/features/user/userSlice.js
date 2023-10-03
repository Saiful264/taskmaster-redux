import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../../utils/firebase.config"
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user Slich",data);
    return;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.email = "";
        state.name = "";
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload.email;
        state.name = payload.name;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.email = "";
        state.name = "";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
