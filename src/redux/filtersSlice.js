import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
		name: ""
	}
	
}

 const filtersSlice = createSlice({
    name: "filters",
    initialState,
        reducers:{},
})

export default filtersSlice.reducer 
export const setFilter = state => state.filters.filters.name;
