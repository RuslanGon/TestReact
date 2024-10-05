import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const carSchema = Yup.object({
    searchTerm: Yup.string().required("name car is required"),
});


const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const SearchFormCar = ({searchQueryCar}) => {
  const handleSubmit = (values, actions) => {
    // console.log(values);
    searchQueryCar(values)
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={carSchema}>
      <Form>
        <label>
          <span>Search car:</span>
          <br />
          <Field type="text" name="searchTerm" placeholder="search" />
          <ErrorMessage name="searchTerm" component="span" />
        </label>
        <br />
      <button type="submit">Search car 🚌</button>
      </Form>
    </Formik>
  );
};

export default SearchFormCar;