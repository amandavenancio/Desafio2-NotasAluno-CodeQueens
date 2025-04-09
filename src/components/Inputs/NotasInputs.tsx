import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
`

type InputNotaProps = {
  nota1: string;
  nota2: string;
  nota3: string;
  onChangeNota1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNota2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNota3: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputNota: React.FC<InputNotaProps> = ({
  nota1,
  nota2,
  nota3,
  onChangeNota1,
  onChangeNota2,
  onChangeNota3,
}) => (
  <>
    <Input
      type="number"
      value={nota1}
      onChange={onChangeNota1}
      placeholder="Nota 1"
    />
    <Input
      type="number"
      value={nota2}
      onChange={onChangeNota2}
      placeholder="Nota 2"
    />
    <Input
      type="number"
      value={nota3}
      onChange={onChangeNota3}
      placeholder="Nota 3"
    />
  </>
);

export default InputNota