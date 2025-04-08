import React from "react";
import styled from "styled-components";

const Input= styled.input `
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
`

type InputAlunoProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const InputAluno: React.FC<InputAlunoProps> = ({ value, onChange, placeholder}) => (
  <Input
  type="string"
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  />
); 

export default InputAluno