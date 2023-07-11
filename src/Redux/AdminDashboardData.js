import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const AdminDashboardData = createSlice({
  name: "DashboardData",
  initialState: {
    loading: true,
    Details: null,
    Problems: 0,
    OtherDetails: {},
    isProfileFetched: false,
    error: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // TEACHER PROFILE BUILDERS
    builder.addCase(FetchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchProfile.fulfilled, (state, action) => {
      state.loading = false;
      const { HighPriorityProblems, SolvedProblems } = action.payload;
      state.Details = action.payload.Profile;
      state.Problems = action.payload.Problems;
      state.OtherDetails = { HighPriorityProblems, SolvedProblems };
      state.isProfileFetched = true;
      localStorage.setItem("authtoken", action.payload.authtoken);
    });
    builder.addCase(FetchProfile.rejected, (state, action) => {
      console.log(action);
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export const FetchProfile = createAsyncThunk("Fetch/FetchProfile", async () => {
  const token = localStorage.getItem("admin-token");
  const result = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/admin/find-profile`,
    {},
    { headers: { token: token } }
  );
  const data = await result?.data;
  return data;
});

export default AdminDashboardData.reducer;
