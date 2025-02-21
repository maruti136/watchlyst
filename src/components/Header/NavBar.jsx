import { Nav, Logo, Div, A, Button, Spinner } from "./navBar.Styles.js";
import useLogout from "../../Hooks/useLogout.js";
import { NavLink } from "react-router";

export default function NavBar() {
  const { logout, isPending } = useLogout();

  return (
    <>
      <Nav>
        <Div level={1}>
          <Logo src="logo.png" alt="logo" />
        </Div>
        <Div level={2}>
          <Button onClick={logout}>
            <>{isPending ? <Spinner /> : ""} Log out</>
          </Button>
        </Div>
      </Nav>
    </>
  );
}
