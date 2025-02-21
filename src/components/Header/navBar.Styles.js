import styled, { css, keyframes } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem 0.5rem 0rem;
  background-color: var(--nav-sidebar-bg);
  height: 50px;
`;

export const Div = styled.div`
  ${(props) => props.level === 1 && css``}
  ${(props) =>
    props.level === 2 &&
    css`
      display: flex;
      gap: 3rem;
      align-items: center;
    `}

  ${(props) =>
    props.level === 3 &&
    css`
      margin-left: 5rem;
      display: flex;
      align-items: center;
      gap: 4rem;
    `}
`;

export const A = styled.a`
  text-decoration: none;
  color: var(--navlink-color);
  font-weight: 800;
`;

export const Button = styled.button`
  background-color: var(--button-bg);
  color: var(--button-color);
  font-family: "Open Sans";
  font-weight: bold;
  border: none;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  gap: 0.4rem;

  &:hover {
    background-color: var(--button-hover-purple-bg);
  }
`;

// for logout button
export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #9b66d9;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
`;

export const Logo = styled.img`
  width: 190px;
  height: 170px;
  margin-top: 1.5rem;
`;
