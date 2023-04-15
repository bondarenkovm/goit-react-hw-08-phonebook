import { Button, UserContainer, UserTitle } from './UserMenu.styled';
import { useAuth } from 'hooks/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserContainer>
      <UserTitle>{user.name}</UserTitle>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserContainer>
  );
}
export default UserMenu;
