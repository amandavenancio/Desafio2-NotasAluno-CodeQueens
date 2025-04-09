import { styled } from "styled-components";
import { ButtonProps } from "./VerificarButton";

const ClearButton = styled.button`
  background-color: #dc3545;
  color: white;
  width: 48%;
  padding: 10px;
  margin-top: 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
`;

export const ResetButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <ClearButton
    onClick={onClick}>
    {children}
  </ClearButton>
);