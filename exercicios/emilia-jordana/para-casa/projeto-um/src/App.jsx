
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Card from './components/Card'

import Leitura from './assets/Leitura.jpg'
import Vinhos from './assets/Vinhos.webp'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Bio />
      <Card
        title="Leitura"
        description="Desde os 8 anos, tenho a leitura como hobby, e todo ano tenho como meta ler um livro por mês"
        image={Leitura}
        imageAlt="Uma Boa Leitura"
      />
      <Card
        title="Vinhos"
        description="Loren Ipsun"
        image={Vinhos}
        imageAlt="Uma Bom vinho"
      />
      <Footer name="Emilia"/>
    </>
  )
}

export default App
