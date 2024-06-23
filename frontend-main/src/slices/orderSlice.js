import {
  createSlice,
  createEntityAdapter,
  createAction,
} from "@reduxjs/toolkit";
import { addDocumentSpecification } from "./documentSpecificationSlice";

const orderAdapter = createEntityAdapter();

export const addDocumentSpecificationToOrder = createAction(
  "addDocumentSpecificationToOrder"
);

export const deleteDocumentSpeficationWithOrderId = createAction(
  "deleteDocumentSpeficationWithOrderId"
);

export const orderSlice = createSlice({
  name: "orders",
  initialState: orderAdapter.getInitialState(),
  // require another reducer to remove document specification fields
  // need to define what happens in the action
  reducers: {
    addOrder: (state, action) => {
      orderAdapter.addOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDocumentSpecificationToOrder, (state, action) => {
        // { orderId: 1, documentSpecification{} }
        const { orderId, documentSpecification } = action.payload;

        // read from state
        let order = state.entities[orderId];

        if (order === undefined) {
          return;
        }

        // write to state
        order.documentSpecifications.push(documentSpecification.id);
      })
      .addCase(deleteDocumentSpeficationWithOrderId, (state, action) => {
        console.log(action.payload);
        const { orderId, documentSpecificationId } = action.payload;

        // read from state
        let order = state.entities[orderId];

        if (order === undefined) {
          return;
        }

        order.documentSpecifications = order.documentSpecifications.filter(
          (specId) => specId !== documentSpecificationId
        );
      })
      .addDefaultCase((state, action) => {});
  },
});

export const { addOrder } = orderSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOrder = (state) => state.documentSpecification.value;

export const { selectById: selectOrderById } = orderAdapter.getSelectors();
export default orderSlice.reducer;
