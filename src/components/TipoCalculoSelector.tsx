
import React from 'react';
import { TipoCalculo } from '@/types';
import { BookOpen, GraduationCap } from 'lucide-react';

interface TipoCalculoSelectorProps {
  tipoAtual: TipoCalculo;
  onTipoChange: (tipo: TipoCalculo) => void;
}

const TipoCalculoSelector = ({ tipoAtual, onTipoChange }: TipoCalculoSelectorProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Escolha o tipo de cálculo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onTipoChange('periodo')}
          className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 ${
            tipoAtual === 'periodo'
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
          }`}
        >
          <BookOpen className="w-6 h-6" />
          <div className="text-left">
            <h3 className="font-medium">Período Específico</h3>
            <p className="text-sm opacity-70">Calcular média de um semestre/período</p>
          </div>
        </button>
        
        <button
          onClick={() => onTipoChange('curso')}
          className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 ${
            tipoAtual === 'curso'
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
          }`}
        >
          <GraduationCap className="w-6 h-6" />
          <div className="text-left">
            <h3 className="font-medium">Curso Completo</h3>
            <p className="text-sm opacity-70">Calcular média geral do curso</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TipoCalculoSelector;
