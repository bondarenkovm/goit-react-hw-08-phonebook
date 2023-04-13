import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Container } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';

function Layout() {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
export default Layout;
