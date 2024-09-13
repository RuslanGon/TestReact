import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useEffect, useRef } from "react";
import * as Yup from "yup";


const searchFormSchema = Yup.object({
    searchTerm: Yup.string().required("Search term is required"),
});


const FORM_INITIAL_VALUES = {
  searchTerm: ""
};

const SearchForm = ({ onSetSearchQuery }) => {

  // const inputRef = useRef(null);
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus(); // Устанавливаем фокус на инпуте при загрузке страницы
  //   }
  // }, []);

  const handleSubmit = (values) => {
    // console.log(values);
    onSetSearchQuery(values.searchTerm);
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={searchFormSchema}
    >
      <Form>
        <label>
          <Field type="text" name="searchTerm" placeholder="search" />
          <ErrorMessage name="searchTerm" component="span" />
        </label>
      <button type="submit" aria-label="Search">🔎</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;