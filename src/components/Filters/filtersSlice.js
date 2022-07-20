// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    // {type: filters/searchFilterChange}
    //mutation thao tác trực tiếp lên trên object hoặc array
    //-> viết mutation nhưng hoạt động như immutation
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
