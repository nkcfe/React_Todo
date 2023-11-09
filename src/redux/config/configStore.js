// 중앙 데이터 관리소 (store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import todoReducer from "../modules/todo";
import { configureStore } from "@reduxjs/toolkit";

// 일반 리듀서
// const rootReducer = combineReducers({
//   todoReducer,
// });
// const store = createStore(rootReducer);

// 리덕스 툴킷
const store = configureStore({
  reducer: {
    todoReducer: todoReducer,
  },
});

export default store;
