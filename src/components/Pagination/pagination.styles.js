import styled from "styled-components";

// Flex container for the pagination
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0.5rem;
`;

// Button Flex container
export const ButtonFlex = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

// Styling the result set text
export const ResultSet = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(67, 67, 67, 0.71);
  margin-right: 1rem;
`;

// Styling the buttons with modern, sleek look
export const ManouverButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(200, 130, 214, 0.36);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(200, 130, 214, 0.62);
    transform: scale(1.1);
  }

  &:disabled {
    background-color: rgba(167, 168, 168, 0.24);
    cursor: not-allowed;
  }
`;
