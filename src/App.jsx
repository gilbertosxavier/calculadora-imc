import {useState} from 'react';
import './app.css';

export default function App() {

  const [peso,setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [message, setMessage] = useState('');

function calcularIMC () {
  const alt = altura / 100;
  const imc = peso / (alt*alt)


  if (imc < 18.6) {
   setMessage(`Você está abaixo do peso! Seu IMC: ${imc.toFixed(2)} `)
  }else if(imc >=18.6 && imc < 24.9) {
    setMessage(`Você está na faixa de peso ideal! IMC: ${imc.toFixed(2)}`)
  }else if (imc >= 24.9 && imc < 34.9) {
    setMessage(`Você está acima do peso! Seu IMC: ${imc.toFixed(2)}`)
  } else { setMessage(`Cuidado, Você está na faixa de obesidade! Seu IMC: ${imc.toFixed(2)}`)}


}


  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu IMC</span>
      <div className="area-input">
        <input 
        type="text"
        placeholder="Peso em (kg) ex: 80" 
        value={peso}
        onChange={ (e) => setPeso(e.target.value)}/>
        <input 
        type="text" 
        placeholder="Altura em (cm) ex: 180"
        value={altura} 
        onChange={(e) => setAltura(e.target.value)}/>
      <button onClick={calcularIMC}>Calcular</button>
      <h2>{message}</h2>
      </div>
    </div>

  )
}