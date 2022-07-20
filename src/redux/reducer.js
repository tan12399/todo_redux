import { combineReducers } from "redux";

import filterReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
