
import React from 'react';
import Header from '@/components/Header';
import TipoCalculoSelector from '@/components/TipoCalculoSelector';
import DisciplinaForm from '@/components/DisciplinaForm';
import DisciplinasList from '@/components/DisciplinasList';
import ResultadoCalculos from '@/components/ResultadoCalculos';
import { useCalculadora } from '@/hooks/useCalculadora';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const Index = () => {
  const {
    disciplinas,
    tipoCalculo,
    resultado,
    adicionarDisciplina,
    removerDisciplina,
    limparDisciplinas,
    setTipoCalculo
  } = useCalculadora();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-6 py-8">
        <TipoCalculoSelector 
          tipoAtual={tipoCalculo}
          onTipoChange={setTipoCalculo}
        />
        
        <DisciplinaForm onAddDisciplina={adicionarDisciplina} />
        
        <DisciplinasList 
          disciplinas={disciplinas}
          onRemoveDisciplina={removerDisciplina}
        />
        
        {disciplinas.length > 0 && (
          <div className="mb-6 flex justify-center">
            <Button
              onClick={limparDisciplinas}
              variant="outline"
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Limpar Todas as Disciplinas
            </Button>
          </div>
        )}
        
        <ResultadoCalculos 
          resultado={resultado}
          tipoCalculo={tipoCalculo}
        />
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <p className="text-gray-400">
            Calculadora de Rendimento Universitário - Desenvolvida para facilitar seus estudos
          </p>
          <p className="text-gray-400">
            Criada por Skiner Bold - o amor da Aninha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
