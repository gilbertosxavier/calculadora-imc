import {useState} from 'react';
import './app.css';

export default function App() {

  const [weight,setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [fadeOut, setFadOut] = useState(false);

function calculateIMC () {
  const newHeight = height / 100;
  const imc = weight / (newHeight * newHeight)

  if (imc < 18.6) {
   setMessage(`Você está abaixo do peso! Seu IMC: ${imc.toFixed(2)} `)
  }else if(imc >=18.6 && imc < 24.9) {
    setMessage(`Você está na faixa de peso ideal! IMC: ${imc.toFixed(2)}`)
  }else if (imc >= 24.9 && imc < 34.9) {
    setMessage(`Você está acima do peso! Seu IMC: ${imc.toFixed(2)}`)
  } else { setMessage(`Cuidado, Você está na faixa de obesidade! Seu IMC: ${imc.toFixed(2)}`)}

  setWeight('');
  setHeight('');
  setFadOut(false);

  setTimeout(() => setFadOut(true), 4000);
  setTimeout(() => setMessage(""), 5000);

}


  return (
    <div className="app">
      <h1>Calcule o seu IMC!</h1>
      <div className="area-input">
        <input 
        type="text"
        placeholder="Peso em (kg) ex: 80" 
        value={weight}
        onChange={ (e) => setWeight(e.target.value)}/>
        <input 
        type="text" 
        placeholder="Altura em (cm) ex: 180"
        value={height} 
        onChange={(e) => setHeight(e.target.value)}/>
      <button onClick={calculateIMC}>Calcular</button>
      {message && <h2 className={fadeOut ? "fade-out" : ""}>{message}</h2>}
      </div>
    </div>

  )
}