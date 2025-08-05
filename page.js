'use client';
import { useState } from 'react';
import './style.css';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('DEG');

  const append = (val) => setExpression((prev) => prev + val);

  const toggleMode = () => setMode((prev) => (prev === 'DEG' ? 'RAD' : 'DEG'));

  const clear = () => {
    setExpression('');
    setResult('');
  };

  const backspace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const toRadians = (angle) => (mode === 'DEG' ? (angle * Math.PI) / 180 : angle);

  const evaluate = () => {
    try {
      const expr = expression
        .replace(/sin\(([^)]+)\)/g, (_, val) => `Math.sin(${toRadians(eval(val))})`)
        .replace(/cos\(([^)]+)\)/g, (_, val) => `Math.cos(${toRadians(eval(val))})`)
        .replace(/tan\(([^)]+)\)/g, (_, val) => `Math.tan(${toRadians(eval(val))})`)
        .replace(/log\(([^)]+)\)/g, 'Math.log10($1)')
        .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)')
        .replace(/\^/g, '**');

      const evalResult = eval(expr);
      setResult(evalResult);
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h2>Scientific Calculator</h2>
      <div className="display">
        <div>{expression || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="mode">
        <button onClick={toggleMode}>{mode}</button>
      </div>
      <div className='mode'>
        <button onClick={() => append('log(')}>log</button>
      </div>
      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={backspace}>Del</button>
        <button onClick={() => append('(')}>(</button>
        <button onClick={() => append(')')}>)</button>

        <button onClick={() => append('7')}>7</button>
        <button onClick={() => append('8')}>8</button>
        <button onClick={() => append('9')}>9</button>
        <button onClick={() => append('/')}>÷</button>

        <button onClick={() => append('4')}>4</button>
        <button onClick={() => append('5')}>5</button>
        <button onClick={() => append('6')}>6</button>
        <button onClick={() => append('*')}>×</button>

        <button onClick={() => append('1')}>1</button>
        <button onClick={() => append('2')}>2</button>
        <button onClick={() => append('3')}>3</button>
        <button onClick={() => append('-')}>−</button>

        <button onClick={() => append('0')}>0</button>
        <button onClick={() => append('.')}>.</button>
        <button onClick={evaluate}>=</button>
        <button onClick={() => append('+')}>+</button>

        <button onClick={() => append('sin(')}>sin</button>
        <button onClick={() => append('cos(')}>cos</button>
        <button onClick={() => append('tan(')}>tan</button>
        <button onClick={() => append('√(')}>√</button>

      </div>
    </div>
  );
}
