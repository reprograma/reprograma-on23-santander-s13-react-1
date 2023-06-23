import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import tai from './assets/txucalinda.jpg';
import coracao from './assets/coracao.jpg';

function App() {

  return (
    <>
      <Header />
      <Bio />
      <Card 
        title="Gatinhos" 
        description="Lorem Ipsum is simply dummy text of the prinas bee" 
        image={tai} 
        imageAlt="imagem de tai"
      />
      <Card 
        title="Amor" 
        description="Lorem Ipsum is simply dummy text of the prinas bee" 
        image={coracao} 
        imageAlt="Muito amor"
      />
      <Footer name="tai"/>
    </>
  )
}

export default App
