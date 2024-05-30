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
    },
    {
      id: 3,
      nome: "Versículos",
      frases: [
        'Esforçai-vos, e ele fortalecerá o vosso coração, todos vós que esperais no ETERNO. Salmos 31:24',
        'Confia no ETERNO de todo o teu coração e não te estribes no teu próprio entendimento. Provérbios 3:5',
        'Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. Salmos 46:1',
        'Os justos clamam, e o Senhor os ouve, e os livra de todas as suas angústias. Salmos 34:17',
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
    console.log(categoriaSelecionada);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);

    console.log(allFrases[categoriaSelecionada].frases[numeroAleatorio]);

    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`);
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

      <button className='button-frase' onClick={gerarFrase}>Gerar Frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
    </div>
  )
}

export default App
