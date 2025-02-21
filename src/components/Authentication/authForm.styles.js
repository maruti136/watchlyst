import styled, { keyframes } from "styled-components";
export const StyledNavLink = styled.div`
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6a4c9c;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #9b66d9; /* Darker lavender on hover */
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Form = styled.form`
  width: 500px;
  padding: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 90%; /* Allow the form to scale down on smaller screens */
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row; /* Horizontal layout */
  justify-content: flex-start;
  gap: 20px; /* Space between label and input */
  align-items: center; /* Vertically center the label and input */
`;

export const Label = styled.label`
  width: 30%;
  font-size: 14px;
  color: #6a4c9c; /* Lavender color */
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack input and error message vertically */
  width: 70%; /* Make wrapper width match input width */
`;

export const Input = styled.input`
  padding: 12px;
  margin: 5px 0;
  border: 1px solid #d4a5f7; /* Lavender border */
  border-radius: 8px;
  background-color: rgb(244, 241, 245); /* Light lavender background */
  font-size: 14px;
  font-family: "Open Sans";
  color: rgba(100, 99, 100, 0.93);
  font-weight: bold;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9b66d9; /* Darker lavender */
    box-shadow: 0 0 8px rgba(155, 102, 217, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: var(--button-color);
  background-color: var(--button-bg);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 50%; /* Adjusted button width */
  align-self: center; /* Centered button */
  font-weight: bold;

  &:hover {
    background-color: var(--button-hover-purple-bg);
  }

  &:disabled {
    cursor: not-allowed;
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

export const Heading = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #6a4c9c;
  font-weight: 600;
  margin-top: 80px;
`;
export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgba(196, 27, 27, 0.84);
  margin-top: 5px;
  display: block;
`;

export const Logo = styled.img`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px; /* Adjust size as needed */
  height: auto;
  z-index: 10;
`;
