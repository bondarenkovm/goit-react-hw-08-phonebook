import { LoginForm } from 'components/LoginForm/LoginForm';
import { Wrapper, Title } from './Login.styled';

function Login() {
  return (
    <Wrapper>
      <Title>Login form</Title>
      <LoginForm />
    </Wrapper>
  );
}
export default Login;
