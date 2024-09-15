
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("email is required"),
  password: Yup.string().required("password is required"),
});


const FORM_INITIAL_VALUES = {
  email: "",
  password: ''
};

const LoginPage = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form>
        <h2>Login user</h2>
        <br />
        <label>
          <span>email:</span>
          <br />
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="span" />
          <br />
        </label>
       <label>
          <span>password:</span>
          <br />
          <Field type="text" name="password" placeholder="password" />
          <ErrorMessage name="password" component="span" />
          <br />
        </label>
      <br />
      <button type="submit">Login user 👱</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;