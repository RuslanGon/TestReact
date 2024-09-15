import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";

const ContactsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadData = () => {
    try {
      setIsLoading(true);
      // Имитация загрузки данных
      setTimeout(() => {
        setIsLoading(false); // Успешная загрузка
      }, 1000); // Задержка в 1 секунду для примера
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  // Вызов функции loadData только при монтировании компонента
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
