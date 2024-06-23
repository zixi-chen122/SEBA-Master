import { configureStore } from '@reduxjs/toolkit'
import documentSpecificationReducer from '../slices/documentSpecificationSlice'
import copyshopSearchSpecificationReducer from '../slices/copyshopSearchSpecificationSlice'
import orderSliceReducer from "../slices/orderSlice";

import userReducer from '../slices/userSlice'
import testCopyshopSearchSpecificationReducer from '../slices/testCopyshopSearchSpecificationSlice'

// import resultSlice from '../slices/resultSlice'

export default configureStore({
  reducer: {
    documentSpecification: documentSpecificationReducer,
    copyshopSearchSpecification: copyshopSearchSpecificationReducer,
    orders: orderSliceReducer,
    user: userReducer,
    testCopyshopSearchSpecification: testCopyshopSearchSpecificationReducer,
    // result: resultSlice
  }
})