import { createSlice } from "@reduxjs/toolkit";

// const copyshopSearchSpecificationAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: {username:'wx---',password:"9999"},
  reducers: {
      login: (state, action) => {
          state.username=action.payload.username
       // documentUploadAdapter.addOne(state, action.payload);
      },
      
  },
});

// export const { addCopyshopSearchSpecification } = copyshopSearchSpecificationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCopyshopSearchSpecification = (state) => state.copyshopSearchSpecification.value;

export const { login } = userSlice.actions
console.log(login)

export default userSlice.reducer;

// export const { selectAll: selectUploads } =
//   copyshopSearchSpecificationAdapter.getSelectors();
