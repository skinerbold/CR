
export interface Disciplina {
  id: string;
  nome: string;
  nota: number;
  creditos: number;
}

export interface CalculoResultado {
  mediaGeral: number;
  totalCreditos: number;
  totalDisciplinas: number;
}

export type TipoCalculo = 'periodo' | 'curso';
