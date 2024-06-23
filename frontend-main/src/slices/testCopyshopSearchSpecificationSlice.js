import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const copyshopSearchSpecificationAdapter = createEntityAdapter();

export const testCopyshopSearchSpecificationSlice = createSlice({
  name: "testCopyshopSearchSpecification",
  initialState: { option:{
    location: {},
    deliveryType: "",
    timeToDelivery: "",
  }
  },
  reducers: {
    changeTestCopyshopSearchSpecification: (state, action) => {
      console.log("changeState?????")
      console.log(action.payload)
      state.option=action.payload
      console.log(state.option)
    },
  }
});

export default testCopyshopSearchSpecificationSlice.reducer;
export const { changeTestCopyshopSearchSpecification } = testCopyshopSearchSpecificationSlice.actions
