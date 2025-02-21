import styled, { css } from "styled-components";

export const Section = styled.section`
  height: calc(100vh - 110px);
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem 0.1rem 0.5rem 0.5rem;
  width: 48%;
  background-color: var(--section-bg);
  padding: 1rem;
  border-radius: 5px 0 0 5px;
  position: relative; /* Allow relative positioning inside */
`;

export const Div = styled.div`
  ${(props) =>
    props.name === "search-input" &&
    css`
      width: 80%;
    `}

  ${(props) =>
    props.name === "search-result" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100%;
      overflow-y: auto;
    `}

    ${(props) =>
    props.name === "result-item" &&
    css`
      display: flex;
      align-items: center;
      gap: 0.2rem;
      background-color: var(--movie-bg);
      padding: 0.6rem 0.2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(57, 57, 57, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      }
    `}

    ${(props) =>
    props.name === "result-item-info" &&
    css`
      display: flex;
      flex-direction: column;
      width: 60%;
    `}
`;

export const Img = styled.img`
  width: 65px;
  height: 80px;
  border-radius: 6px;
  margin-right: 1rem;
`;

export const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--title);
  margin-bottom: 0.2rem;
`;

export const P = styled.p`
  font-size: 0.85rem;
  color: #777;
`;

export const Input = styled.input`
  width: 90%;
  background-color: var(--search-bg);
  padding: 15px 10px 20px 15px;
  font-size: 1rem;
  border: 1px solid #cdcdcddd;
  border-radius: 30px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6f7070c7;
  }
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
  margin-left: 0.6rem;
  color: rgb(82, 81, 83);
  font-weight: 600;

  ${(props) =>
    props.name === "movie" &&
    css`
      background-color: var(--movie-badge-bg);
    `}

  ${(props) =>
    props.name === "series" &&
    css`
      background-color: var(--series-badge-bg);
    `}
`;

export const CentreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const Message = styled.p`
  font-size: 25px;
  font-weight: 800;
  color: rgba(161, 135, 177, 0.71);
  text-align: center; /* Ensures the text is centered */
  margin: 1rem 0;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
