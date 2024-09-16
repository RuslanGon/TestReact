import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiDeleteContact, apiGetContacts } from "../redux/contacts/operations.js";
import { selectContacts, selectContactsIsError, selectContactsIsLoading } from "../redux/contacts/selectors.js";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import NewContactForm from "../components/NewContactForm/NewContactForm.jsx";

const ContactsPage = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectContactsIsLoading)
  const isError = useSelector(selectContactsIsError)
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId))
  }

  return (
    <div>
      <NewContactForm />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul>
        {Array.isArray(contacts) && contacts.length === 0 && (
          <li>You dont have added contacts</li>
        )}
        {Array.isArray(contacts) &&
          contacts.map((item) => (
            <li key={item.id}>
              <h3>
                Name: {item.name}{" "}
                <button onClick={() => {onDeleteContact(item.id)}} type="button">
                  delete contact 🎈
                </button>
              </h3>
              <p>Number: {item.number}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
