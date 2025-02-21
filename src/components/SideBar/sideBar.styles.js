import styled, { css } from "styled-components";

export const Aside = styled.aside`
  border-top: 1px solid rgba(163, 183, 195, 0.15);
  height: calc(100vh - 100px);
  width: 18%;
  background-color: var(--nav-sidebar-bg);
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  ${(props) =>
    props.type === "profile" &&
    css`
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 3rem; /* Increased spacing */
      color: rgba(54, 54, 54, 0.8);
    `}

  ${(props) =>
    props.type === "links" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    `}
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Button = styled.button`
  display: flex;
  gap: 0.2rem;
  font-size: 1rem;
  color: rgba(57, 57, 57, 0.89);
  background-color: transparent;
  border: none;
  font-family: "Open Sans";
  font-weight: 800;
  padding: 0.6rem 1rem;
  width: 80%;
  border-radius: 8px;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover-grey-bg);
    transform: translateX(10px); /* Smooth slide effect on hover */
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--button-bg);
      font-weight: 800;
      transform: translateX(10px);
    `}
`;
