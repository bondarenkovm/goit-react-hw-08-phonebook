import AuthNav from 'components/AuthNav/AuthNav';
import { Container } from './AppBar.styled';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

function AppBar() {
  return (
    <Container>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </Container>
  );
}
export default AppBar;
