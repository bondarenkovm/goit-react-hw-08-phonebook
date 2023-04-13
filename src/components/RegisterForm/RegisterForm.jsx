import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter name').trim(),
  email: Yup.string().nullable().email().required('Enter email').trim(),
  password: Yup.string()
    .min(8 | 'Minimum 8 characters!')
    .max(14 | 'Maximum 14 characters!')
    .required('Enter password')
    .trim(),
});
function RegisterForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">User name:</label>
          <Field type="text" name="name" placeholder="Enter user name" />
          <ErrorMessage name="name" component="span"></ErrorMessage>

          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
export default RegisterForm;
