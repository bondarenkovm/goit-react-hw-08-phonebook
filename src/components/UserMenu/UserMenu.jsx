import { Button, UserContainer, UserTitle } from './UserMenu.styled';

function UserMenu() {
  return (
    <UserContainer>
      <UserTitle>User</UserTitle>
      <Button type="button">Logout</Button>
    </UserContainer>
  );
}
export default UserMenu;
