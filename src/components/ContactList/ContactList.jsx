import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";
import { deleteContact, fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector(selectLoading);

  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);
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
      {filteredContacts.map(({ id, name, number }) => (
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
