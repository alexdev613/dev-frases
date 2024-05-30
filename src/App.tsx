import { useState } from 'react';
import './App.css';

import logoImg from './assets/logo.png';

function App() {

  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivacionais",
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realiaze o obvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!',
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
        'Escreva em seu coração: todo dia é o melhor dia do ano!',
        'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol',
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
    console.log(categoriaSelecionada)
    return;
  }

  return (
    <div className='container'>

      <img
        src={logoImg}
        alt="Logo Dev Frases"
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {/* <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button> */}

        {allFrases.map( (item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 5 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase'>Gerar Frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
    </div>
  )
}

export default App
