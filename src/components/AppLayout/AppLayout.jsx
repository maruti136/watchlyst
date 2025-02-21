import { Outlet } from "react-router";
import NavBar from "../Header/NavBar.jsx";
import { Div } from "./appLayout.Styles.js";

export default function AppLayout() {
  console.log("app layout loading");
  return (
    <>
      <NavBar />
      <Div>
        <Outlet />
      </Div>
    </>
  );
}
