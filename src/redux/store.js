import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import todoReducer from "./todos/todosSlice";
import wishListReducer from "./WishList/wishListSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
    wishlistItem: wishListReducer,
  },
});

export default store;
