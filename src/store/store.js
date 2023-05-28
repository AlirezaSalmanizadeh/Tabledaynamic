import { configureStore } from '@reduxjs/toolkit';
import TableReducer from './slices/slices'


const reducer={
    Table:TableReducer,
  
};

 const store=configureStore({
  reducer: reducer,
  devTools:true, 
  
 })

export default store;