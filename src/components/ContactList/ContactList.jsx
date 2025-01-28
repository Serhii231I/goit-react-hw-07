import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = ({ onDelete }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
