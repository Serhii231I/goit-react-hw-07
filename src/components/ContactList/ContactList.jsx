import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";
import { deleteContact, fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
import { setFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);

  const loading = useSelector(selectLoading);

  const error = useSelector(selectError);
  const filters = useSelector(setFilter);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.contactList}>
      {contacts
        .filter((contact) => contact)
        .map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleDelete}
          />
        ))}
    </ul>
  );
};
export default ContactList;
