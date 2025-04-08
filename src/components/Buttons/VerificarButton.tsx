import React from "react";
import styled from "styled-components";

const VerfButton = styled.button`
  width: 48%;
  padding: 10px;
  margin-top: 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background 0.3s;
`;

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const VerificaButton: React.FC<ButtonProps> = ({onClick, children, disabled}) => (
  <VerfButton 
    onClick={onClick} 
    disabled={disabled}>
      {children}
  </VerfButton>
);

export default VerificaButton