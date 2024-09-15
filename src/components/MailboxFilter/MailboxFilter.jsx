import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/mailbox/selectors.js";
import { setFilter } from "../../redux/mailbox/mailboxReducer.js";

const MailboxFilter = () => {
 const dispatch = useDispatch()
 const filter = useSelector(selectFilter)

 const onChangeFilter = (event) => {
   dispatch(setFilter(event.target.value));
 };

 
  return (
    <section>
      <h3>Search user by name or emaile</h3>
      <input
        type="text"
        placeholder="🔍  search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </section>
  );
};

export default MailboxFilter;
