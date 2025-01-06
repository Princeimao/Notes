import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

const initialUser = {
  id: "",
  email: "",
  name: "",
};

const initialState = {
  user: initialUser,
  isLoading: false,
  isAuthenticated: false,
};

export const checkAuthenticatedUser = createAsyncThunk(
  "auth/checkAuthenticatedUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/auth/user/getUser");
      return response.data;
    } catch (error) {
      console.log("some thing went wrong while getting user", error);
      return rejectWithValue("falied to get user");
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    register: (state, action) => {
      (state.user = action.payload),
        (state.isLoading = false),
        (state.isAuthenticated = true);
    },
    logout: (state) => {
      (state.user = initialUser),
        (state.isLoading = false),
        (state.isAuthenticated = false);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(checkAuthenticatedUser.pending, (state) => {
        (state.user = null),
          (state.isLoading = true),
          (state.isAuthenticated = false);
      })
      .addCase(checkAuthenticatedUser.fulfilled, (state, action) => {
        (state.user = action.payload),
          (state.isLoading = false),
          (state.isAuthenticated = true);
      })
      .addCase(checkAuthenticatedUser.rejected, (state) => {
        (state.user = null),
          (state.isLoading = false),
          (state.isAuthenticated = false);
      }),
});

export const { register, logout } = authSlice.actions;
export default authSlice.reducer;
