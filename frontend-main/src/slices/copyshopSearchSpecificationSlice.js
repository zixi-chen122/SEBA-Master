import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const copyshopSearchSpecificationAdapter = createEntityAdapter();

export const copyshopSearchSpecificationSlice = createSlice({
  name: "copyshopSearchSpecification",
  initialState: copyshopSearchSpecificationAdapter.getInitialState(),
  reducers: {
    addCopyshopSearchSpecification: (state, action) => {
      copyshopSearchSpecificationAdapter.addOne(state, action.payload);
    },
  },
});

export const { addCopyshopSearchSpecification } = copyshopSearchSpecificationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCopyshopSearchSpecification = (state) => state.copyshopSearchSpecification.value;

export default copyshopSearchSpecificationSlice.reducer;

export const { selectAll: selectUploads } =
  copyshopSearchSpecificationAdapter.getSelectors();
