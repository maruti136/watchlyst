import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

export const OverlayContent = styled.div`
  background-color: #fff;
  padding: 50px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 30px;
  color: rgba(239, 28, 28, 0.65);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: rgba(239, 28, 28, 0.86);
  }
`;

export const Heading = styled.h2`
  font-size: 26px;
  color: #4a3a6f;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  width: 100%;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #e1d3f4;
  margin: 15px 0;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgb(96, 96, 96);
  font-weight: bold;
  width: 20%;
  text-align: left;
  font-family: "Open Sans";
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const Input = styled.input`
  border: none;
  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  color: rgb(82, 81, 83);
  font-family: "Open Sans";
  width: 60%;
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgb(136, 133, 139);
    box-shadow: 0 0 8px rgba(130, 130, 130, 0.5);
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
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
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
  width: auto;
  align-self: center;

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

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgb(34, 3, 58);
`;

export const FileInput = styled.input`
  background-color: rgba(225, 213, 213, 0);
  color: white;
  width: 100%;
  padding-left: 6rem;

  &::file-selector-button {
    background-color: var(--button-bg);
    color: var(--button-color);
    border: none;
    border-radius: 8px;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
    width: 60%; /* You can adjust this value to control the width */
    max-width: 350px; /* Optional: to limit the max width */
  }

  &::file-selector-button:hover {
    background-color: var(--button-hover-purple-bg);
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border: 3px solid rgba(225, 225, 225, 0.87);
  border-radius: 50%;

  ${({ isSelected }) =>
    isSelected &&
    `
      border: 3px dashed rgba(23, 222, 53, 0.95); 
    `}

  ${({ isSelected }) =>
    !isSelected &&
    `
      &:hover {
        border: 3px dashed rgba(134, 133, 134, 0.99); /* Red border on hover */
      }
    `}
`;

export const AvatarContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
