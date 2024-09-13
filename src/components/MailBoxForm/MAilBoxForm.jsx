import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const mailBoxSchema = Yup.object({
  userEmail: Yup.string().email("Invalid email format").required("Email is required"),
  userName: Yup.string().required("Name is required"),
  favColor: Yup.string().required("favColor is required").oneOf(['red', 'green', 'blue'])
});


const FORM_INITIAL_VALUES = {
  userEmail: "",
  userName: "",
  favColor: ''
};

const MAilBoxForm = ({ onAddUsers }) => {
  const handleSubmit = (values, actions) => {
    onAddUsers(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={mailBoxSchema}
    >
      <Form>
        <h2>Add new MailBox user</h2>
        <label>
          <span>User email:</span>
          <br />
          <Field type="email" name="userEmail" placeholder="email" />
          <ErrorMessage name="userEmail" component="span" />
        </label>
        <br />
        <label>
          <span>User name:</span>
          <br />
          <Field type="text" name="userName" placeholder="name" />
          <ErrorMessage name="userName" component="span" />
          <br />
        </label>
        <br />
        <span>favourite color</span>
        <br />
        <label>
          <Field type="radio" name="favColor" value="red" />
          <span>Red:</span>
        </label>
        <label>
          <Field type="radio" name="favColor" value="green" />
          <span>Green:</span>
        </label>
        <label>
          <Field type="radio" name="favColor" value="blue" />
          <span>Blue:</span>
          <ErrorMessage component="p" name="favColor" />
        </label>
      <br />
      <button type="submit">Create new user 👱</button>
      </Form>
    </Formik>
  );
};

export default MAilBoxForm;