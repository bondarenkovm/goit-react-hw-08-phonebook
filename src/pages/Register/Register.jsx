import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Wrapper, Title } from './Register.styled';

function Register() {
  return (
    <Wrapper>
      <Title>Registration form</Title>
      <RegisterForm />
    </Wrapper>
  );
}
export default Register;
