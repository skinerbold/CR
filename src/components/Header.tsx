
import React from 'react';
import { Calculator, GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-8 px-6 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Calculadora de Rendimento Universitário
          </h1>
        </div>
        <p className="text-center text-blue-100 text-lg">
          Calcule sua média ponderada de forma rápida e precisa
        </p>
      </div>
    </header>
  );
};

export default Header;
