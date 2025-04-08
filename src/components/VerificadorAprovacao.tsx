import React, { use, useState } from "react";

import InputAluno from "./Inputs/AlunoInput";
import InputIdade from "./Inputs/IdadeInput";
import InputNota from "./Inputs/NotasInputs";

import styled from "styled-components";

import VerificaButton from "./Buttons/VerificarButton";

import verificaAprovacao from "../utils/aprovacao";

const Container = styled.div`
  max-width: 400px;
  width: 90%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
color: #000000;
`
const ResultadosContainer = styled.div`
color: #000000;
`

const VerificadorAprovacao = () => {
  const [name, setName] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [nota1, setNota1] = useState<string>("");
  const [nota2, setNota2] = useState<string>("");
  const [nota3, setNota3] = useState<string>("");
  const [resultado, setResultado] = useState<JSX.Element | null>(null);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleIdade = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  
    // Permite apenas números e um ponto
    if (/^\d*\.?\d*$/.test(value)) {
        setIdade(value);
    }
  };

  const verificar = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      setResultado(verificaAprovacao(n1, n2, n3));
    } else {
      setResultado(<p>Por favor, insira todas as notas corretamente.</p>);
    }
  };

  return (
  <Container>
    <Title>Verificador de Aprovação</Title>
    <InputAluno 
      value={name} 
      onChange={handleName} 
      placeholder="Digite o nome do aluno"
    />
    <InputIdade
      value={idade}
      onChange={(e) => handleIdade(e, setIdade)}
      placeholder="Digite a idade"
    />
    <InputNota
        nota1={nota1}
        nota2={nota2}
        nota3={nota3}
        onChangeNota1={(e) => setNota1(e.target.value)}
        onChangeNota2={(e) => setNota2(e.target.value)}
        onChangeNota3={(e) => setNota3(e.target.value)}
      />

    <VerificaButton 
      onClick={verificar}
      disabled={!name || !idade || !nota1 || !nota2 || !nota3}
    >
      Verificar Aprovação
    </VerificaButton>

    <ResultadosContainer> 
      <p>Esse é o resultado do(a) aluno(a) {name}, {idade} anos: /n</p>
      
      {resultado}
    </ResultadosContainer>
  </Container>
  );
}

export default VerificadorAprovacao