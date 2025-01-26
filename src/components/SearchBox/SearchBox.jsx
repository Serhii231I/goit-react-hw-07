import { useDispatch } from "react-redux";
import s from "../SearchBox/SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={s.searchContainer}>
      <label>
        Find contacts by name
        <input type="text" className={s.searchInput} onChange={handleChange} />
      </label>
    </div>
  );
};
export default SearchBox;
