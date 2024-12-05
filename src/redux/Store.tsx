import { combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartSlice';  
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};


const rootReducer = combineReducers({
  cart: cartReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export type RootState = ReturnType<typeof rootReducer>;


export const Store = configureStore({
  reducer: persistedReducer,
});


export type AppDispatch = typeof Store.dispatch;
