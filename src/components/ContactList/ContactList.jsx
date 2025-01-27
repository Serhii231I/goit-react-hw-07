import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const loading = useSelector((state) => state.contacts.contacts.loading);
  const error = useSelector((state) => state.contacts.contacts.error);
  const filters = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

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
