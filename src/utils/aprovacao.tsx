import { media } from "./media";

export default function verificaAprovacao (nota1: number, nota2: number, nota3: number) {
 const notaFinal = media(nota1, nota2, nota3); 
 if (notaFinal >= 7) {
  return "Aluno aprovado!"
 } else { 
  return "Aluno reprovado"
 }
}
