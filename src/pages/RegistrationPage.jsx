
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiRegistor } from "../redux/auth/operations.js";


const RegistorSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid email format").required("email is required"),
  password: Yup.string().required("password is required"),
});


const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: ''
};

const RegistrationPage = () => {

const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    // console.log(values);
    dispatch(apiRegistor(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegistorSchema}
    >
      <Form>
        <h2>Registor new user</h2>
        <label>
          <span>name:</span>
          <br />
          <Field type="text" name="name" placeholder="name" />
          <ErrorMessage name="name" component="span" />
        </label>
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
      <button type="submit">Registor new user 👱</button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;