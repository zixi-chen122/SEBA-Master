import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const documentUploadAdapter = createEntityAdapter();

export const documentUploadSlice = createSlice({
  name: "documentUpload",
  initialState: documentUploadAdapter.getInitialState(),
  reducers: {
    addDocumentUpload: (state, action) => {
      documentUploadAdapter.addOne(state, action.payload);
    },
  },
});

export const { addDocumentUpload } = documentUploadSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDocumentUploard = (state) => state.documentUpload.value;

export default documentUploadSlice.reducer;

export const { selectAll: selectUploads } =
  documentUploadAdapter.getSelectors();
