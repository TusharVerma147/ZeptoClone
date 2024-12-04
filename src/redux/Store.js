import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice.js'
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key : 'root',
    storage: AsyncStorage,
}

let rootReducer=combineReducers({
    cart:cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = configureStore({
    reducer: persistedReducer,
})




