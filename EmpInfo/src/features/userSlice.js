import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk('users/createUser', async (addedUser, { rejectWithValue }) => {
  const response = await fetch("https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users", {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(addedUser)
  })
  console.log(createUser)
  try {

    const result = await response.json();
    return result

  } catch (error) {
    return rejectWithValue(error)
  }
})

export const showUser = createAsyncThunk('users/showUser', async (args, { rejectWithValue }) => {
  const response = await fetch("https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users");

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
})

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload)
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    builder.addCase(showUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    builder.addCase(showUser.rejected, (state, action) => {
      console.log(action.payload)
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export default userSlice.reducer;
