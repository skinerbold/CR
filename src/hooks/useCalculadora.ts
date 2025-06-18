
import { useState, useMemo } from 'react';
import { Disciplina, CalculoResultado, TipoCalculo } from '@/types';

export const useCalculadora = () => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [tipoCalculo, setTipoCalculo] = useState<TipoCalculo>('periodo');

  const adicionarDisciplina = (novaDisciplina: Omit<Disciplina, 'id'>) => {
    const disciplinaComId: Disciplina = {
      ...novaDisciplina,
      id: Date.now().toString() + Math.random().toString(36)
    };
    setDisciplinas(prev => [...prev, disciplinaComId]);
  };

  const removerDisciplina = (id: string) => {
    setDisciplinas(prev => prev.filter(d => d.id !== id));
  };

  const limparDisciplinas = () => {
    setDisciplinas([]);
  };

  const resultado = useMemo((): CalculoResultado | null => {
    if (disciplinas.length === 0) return null;

    const somaNotasCreditos = disciplinas.reduce(
      (acc, disciplina) => acc + (disciplina.nota * disciplina.creditos),
      0
    );
    
    const totalCreditos = disciplinas.reduce(
      (acc, disciplina) => acc + disciplina.creditos,
      0
    );

    const mediaGeral = totalCreditos > 0 ? somaNotasCreditos / totalCreditos : 0;

    return {
      mediaGeral,
      totalCreditos,
      totalDisciplinas: disciplinas.length
    };
  }, [disciplinas]);

  return {
    disciplinas,
    tipoCalculo,
    resultado,
    adicionarDisciplina,
    removerDisciplina,
    limparDisciplinas,
    setTipoCalculo
  };
};
