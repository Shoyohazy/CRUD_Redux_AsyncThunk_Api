import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};
//Create action
export const createUser = createAsyncThunk('users/createUser', async (addedUser, { rejectWithValue }) => {
  const response = await fetch("https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users", {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(addedUser)
  })
  try {

    const result = await response.json();
    return result

  } catch (error) {
    return rejectWithValue(error)
  }
})
//read action
export const showUser = createAsyncThunk('users/showUser', async (args, { rejectWithValue }) => {
  const response = await fetch("https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users");

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
})
//Delete action
export const deleteUser = createAsyncThunk('users/deleteUser', async (id, { rejectWithValue }) => {
  const response = await fetch(`https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users/${id}`, {
    method: "DELETE",
  });

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
})
//Update action
export const UpdateUser = createAsyncThunk('users/UpdateUser', async (updatedUser, { rejectWithValue }) => {
  const response = await fetch(`https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users/${updatedUser.id}`, {
    method: "PUT",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedUser)
  })
  try {

    const result = await response.json();
    return result

  } catch (error) {
    return rejectWithValue(error)
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
      state.loading = false;
      state.error = action.payload;
    })
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    })
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    builder.addCase(UpdateUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      state.users.map((user) => {
        if (user.id === id) {
          return id;
        }
        return user.id;
      })
    })
    builder.addCase(UpdateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export default userSlice.reducer;
