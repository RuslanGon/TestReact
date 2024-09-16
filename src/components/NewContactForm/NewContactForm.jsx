import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiAddContacts } from "../../redux/contacts/operations.js";

const addContactsSchema = Yup.object({
  name: Yup.string().required("name is required"),
  number: Yup.string().required("number is required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  namber: "",
};

const NewContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(apiAddContacts(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={addContactsSchema}
    >
      <Form>
        <h2>Add new contact</h2>
        <label>
          <span>name:</span>
          <br />
          <Field type="text" name="name" placeholder="name" />
          <ErrorMessage name="name" component="span" />
          <br />
        </label>
        <label>
          <span>number:</span>
          <br />
          <Field type="text" name="number" placeholder="number" />
          <ErrorMessage name="number" component="span" />
          <br />
        </label>
        <br />
        <button type="submit">Add new contact</button>
      </Form>
    </Formik>
  );
};

export default NewContactForm;
