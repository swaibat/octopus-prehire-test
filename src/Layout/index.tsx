import { Link, Outlet } from "react-router-dom";
import { Container } from "../currencies/components/Container";
import { NavBar } from "../currencies/components/NavBar";
import SearchField from "../currencies/components/SearchField";
import { Typography } from "../currencies/components/Typography";

const Layout = () => {
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
};

export default Layout;
