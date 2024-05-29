import logoImg from './assets/logo.png';
import './App.css'

function App() {

  return (
    <div className='container'>

      <img
        src={logoImg}
        alt="Logo Dev Frases"
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className='button-frase'>Gerar Frase</button>

      <p className='textoFrase'>Alguma frase vai vir aqui!</p>
    </div>
  )
}

export default App
