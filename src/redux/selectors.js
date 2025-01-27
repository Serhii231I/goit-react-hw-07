import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
    (state) => state.contacts.contacts.items,
    (state) => state.filters.name,
    (contacts, filters) => {
        return contacts.filter(contact =>
             contact.name?.toLowerCase().includes(filters.toLowerCase())
        );
}
)
