
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Card from './components/Card'
import Footer from './components/Footer'

import rio from './assets/rio-de-janeiro.jpg'
import paraty from './assets/paraty.jpg'
import balneario from './assets/balneario.jpg'


function App() {
  

  return (
    <>
     <Header />
     <Bio />
     <Card 
      title="Rio de Janeiro" 
      description="cidade do Rio de Janeiro" 
      image={rio}
      />
      <Card 
      title="Paraty" 
      description="Mar de Paraty" 
      image={paraty}
      />
      <Card 
      title="Balneário Camboriú" 
      description="Unipraias - Balneário Camboriú" 
      image={balneario}
      />
     <Footer name="Kelly"/>
    </>
  )
}

export default App
