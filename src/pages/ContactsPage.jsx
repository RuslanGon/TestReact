import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetContacts } from "../redux/contacts/operations.js";
import { selectContacts, selectContactsIsError, selectContactsIsLoading } from "../redux/contacts/selectors.js";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";

const ContactsPage = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectContactsIsLoading)
  const isError = useSelector(selectContactsIsError)
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);


  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul>
        {Array.isArray(contacts) && contacts.length === 0 && <li>You dont have added contacts</li>}
        {Array.isArray(contacts) && contacts.map((item) => (
          <li key={item.id}>
            <h3>Name: {item.name}</h3>
            <p>Number: {item.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
