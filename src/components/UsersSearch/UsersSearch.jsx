import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const usersSearchSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});


const FORM_INITIAL_VALUES = {
  name: "",
 
};

const UsersSearch = ({ searchUser }) => {
  const handleSubmit = (values) => {
    searchUser(values.name);
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={usersSearchSchema}
    >
      <Form>
        <h2>Search user</h2>
        <label>
          <br />
          <Field type="text" name="name" placeholder="search" />
          <ErrorMessage name="name" component="span" />
        </label>
        <br />
        <button type="submit">Search 👱</button>
      </Form>
    </Formik>
  );
};

export default UsersSearch;