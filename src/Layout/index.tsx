import { Link, Outlet } from 'react-router-dom';
import { Container } from '../components/Container';
import { NavBar } from '../components/NavBar';
import SearchField from '../components/SearchField';
import { Typography } from '../components/Typography';

function Layout() {
  return (
    <>
      <NavBar>
        <Link to="/">
          <Typography size="lg">OCTOPUS</Typography>
        </Link>
        <SearchField />
      </NavBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
