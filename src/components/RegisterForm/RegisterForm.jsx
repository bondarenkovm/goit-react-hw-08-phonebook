import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Label,
  Field,
  Form,
  ErrorMessage,
  Button,
} from './RegisterForm.styled';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter name').trim(),
  email: Yup.string()
    .nullable()
    .email('Invalid email address')
    .required('Enter email')
    .trim(),
  password: Yup.string()
    .min(8, 'Minimum 8 characters!')
    .max(14, 'Maximum 14 characters!')
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
          <Label htmlFor="name">User name:</Label>
          <Field type="text" name="name" placeholder="Enter user name" />
          <ErrorMessage name="name" component="span"></ErrorMessage>

          <Label htmlFor="email">Email:</Label>
          <Field type="email" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <Label htmlFor="password">Password:</Label>
          <Field type="password" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </div>
  );
}
export default RegisterForm;
