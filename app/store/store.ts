import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from '../reducers';
// import userSlice from "../reducers/userSlice"
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistStore, persistReducer, PersistConfig } from "redux-persist";
//import storage from "redux-persist/lib/storage";

// export type RootState = ReturnType<typeof userSlice>;

// const persistConfig: PersistConfig<RootState> = {
//   key: 'root',
//   storage: AsyncStorage
// };

//const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
    reducer: {
        user: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;