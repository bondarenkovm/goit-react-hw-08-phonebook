import { List, Link } from './Navigation.styled';

function Navigation() {
  return (
    <nav>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </List>
    </nav>
  );
}
export default Navigation;
