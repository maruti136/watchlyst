import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router";
import { Message, Icon, HomeLink, Wrapper } from "./pageNotFound.styles.js";

export default function PageNotFound() {
  return (
    <Wrapper>
      <Icon>
        <FaExclamationTriangle />
      </Icon>
      <Message>Oops! Page Not Found</Message>
      <HomeLink>
        <NavLink to="/home">Go Back Home</NavLink>
      </HomeLink>
    </Wrapper>
  );
}
