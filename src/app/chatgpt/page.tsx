'use client';

import React, { useState } from 'react';

export default function CalculatorPage() {
  const [display, setDisplay] = useState('0');
  const [result, setResult] = useState<string | null>(null);

  const buttons = [
    ['Rad', '|', 'Deg', 'x!', '(', ')', '%', 'AC'],
    ['Inv', 'sin', 'ln', '7', '8', '9', '÷'],
    ['π', 'cos', 'log', '4', '5', '6', '×'],
    ['e', 'tan', '√', '1', '2', '3', '−'],
    ['Ans', 'EXP', 'xʸ', '0', '.', '=', '+'],
  ];

  const handleClick = (value: string) => {
    if (value === 'AC') {
      setDisplay('0');
      setResult(null);
    } else if (value === '=') {
      // Simple eval for numbers and basic operators only
      try {
        // Replace custom operators with JS operators
        const expr = display
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/−/g, '-')
          .replace(/%/g, '/100')
          .replace(/π/g, Math.PI.toString())
          .replace(/e/g, Math.E.toString());
        // eslint-disable-next-line no-eval
        const evalResult = eval(expr);
        setResult(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setDisplay(display === '0' ? value : display + value);
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#232323] flex flex-col items-center justify-center">
      <div className="bg-[#232323] p-6 rounded-xl shadow-lg w-full max-w-xl">
        {/* Judul */}
        <h2 className="text-center text-2xl font-bold text-cyan-200 mb-4">Kalkulator Botak</h2>
        {/* Display */}
        <div className="bg-[#232323] border border-gray-400 rounded-lg mb-2 px-4 py-3 flex items-center justify-between text-white text-3xl font-mono">
          <span className="opacity-50"><svg width={20} height={20}><circle cx={10} cy={10} r={8} fill="none" stroke="#ccc" /></svg></span>
          <span className="ml-auto">{display}</span>
        </div>
        {/* Hasil */}
        <div className="bg-[#232323] border border-gray-600 rounded-lg mb-4 px-4 py-2 flex items-center justify-end text-cyan-200 text-2xl font-mono min-h-[40px]">
          {result !== null && <span>= {result}</span>}
        </div>
        {/* Buttons */}
        <div className="space-y-3">
          {buttons.map((row, i) => (
            <div key={i} className="flex gap-3">
              {row.map((btn, j) => (
                <button
                  key={btn}
                  className={`flex-1 py-2 rounded-full font-semibold text-lg transition
                    ${btn === '=' ? 'bg-cyan-200 text-black flex-[1.5]' : 'bg-[#2e355c] text-white hover:bg-[#39407a]'}
                    ${btn === 'AC' ? 'bg-[#3d3d3d] text-cyan-200' : ''}
                  `}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
        {/* Pemecah Soal Matematika */}
        <div className="mt-6 flex items-center justify-center">
          <button className="bg-[#232323] border border-gray-600 rounded-full px-8 py-2 text-gray-200 font-semibold shadow hover:bg-[#2e355c]">
            Pemecah Soal Matematika &nbsp; &gt;
          </button>
        </div>
        {/* Beri masukan */}
        <div className="mt-2 text-right text-xs text-gray-400">Beri masukan</div>
      </div>
    </div>
  );