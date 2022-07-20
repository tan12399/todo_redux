import { createSelector } from "@reduxjs/toolkit";

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
//   });

//   return todoRemaining;
// };

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  searchTextSelector,
  priorityFilterSelector,
  (todoList, status, searchText, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText.toLowerCase());
      }

      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status !== "All" && status === "Completed"
          ? todo.completed
          : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
