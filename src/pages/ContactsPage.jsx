import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";

const ContactsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadData = () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } 
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      <h3>Contacts</h3>
    </div>
  );
};

export default ContactsPage;
