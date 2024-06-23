import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {
  addDocumentSpecificationToOrder,
  deleteDocumentSpeficationWithOrderId,
} from "./orderSlice";
const documentAdapter = createEntityAdapter();

export const documentSpecificationSlice = createSlice({
  name: "orders",
  initialState: documentAdapter.getInitialState(),
  // require another reducer to remove document specification fields
  // need to define what happens in the action
  reducers: {
    addDocumentSpecification: (state, action) => {
      documentAdapter.addOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDocumentSpecificationToOrder, (state, action) => {
        // { orderId: 1, documentSpecification{} }
        const { documentSpecification } = action.payload;

        documentAdapter.upsertOne(state, documentSpecification);
      })
      .addCase(deleteDocumentSpeficationWithOrderId, (state, action) => {
        documentAdapter.removeOne(
          state,
          action.payload.documentSpecificationId
        );
      })
      .addDefaultCase((state, action) => {});
  },
});

export const { addDocumentSpecification } = documentSpecificationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDocumentSpecification = (state) =>
  state.documentSpecification.value;

export default documentSpecificationSlice.reducer;

export const { selectAll: selectDocuments, selectIds: selectDocumentsByIds } =
  documentAdapter.getSelectors();
