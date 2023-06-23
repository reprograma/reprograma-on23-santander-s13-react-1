import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import evangelion from './assets/evangelion.webp';
import cafe from './assets/download.jpeg';

function App() {

  return (
    <>
      <Header />
      <Bio />
      <Card 
        title="Gatinhos" 
        description="Lorem Ipsum is simply dummy text of the prinas bee" 
        image={evangelion} 
        imageAlt="robozinhos legais do evagelion"
      />
      <Card 
        title="Cafés" 
        description="Lorem Ipsum is simply dummy text of the prinas bee" 
        image={cafe} 
        imageAlt="café da tarde"
      />
      <Footer name="Lili"/>
    </>
  )
}

export default App
