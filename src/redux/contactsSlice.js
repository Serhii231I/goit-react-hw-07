import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null
  }
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.contacts.loading = true;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.items = action.payload;
                state.contacts.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = action.payload;
        })
    }
})

export default contactsSlice.reducer;