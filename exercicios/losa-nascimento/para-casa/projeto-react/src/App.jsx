import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import fotoarte from './assets/fotoarte.png';
import fotof from './assets/fotof.jpg';

function App() {

  return (
    <>
      <Header />
      <Bio />
      <Card 
        title="Arte" 
        description="A arte move suas percepções até como forma de enfrentar a realidade conturbada presente no dia a dia, as dinâmicas de humanidade a partir das expressões artísticas fascina Losa e cria pontes para sua criatividade aflorar." 
        image={fotoarte} 
        imageAlt="arte imagem"
      />
      <Card 
        title="Histórias de fantasia" 
        description="Tudo se conecta na vida de Losa, as fantasias já são presentes em suas caminhadas, mas um refúgio que ela adora buscar está em histórias de fantasia que envolve outros mundos e seres. Losa mergulha completamente nessas histórias e ama isso porque consegue se imaginar protagonizando grandes momentos." 
        image={fotof} 
        imageAlt="fantasia imagem"
      />
      <Footer name="Losa"/>
    </>
  )
}

export default App