import './App.css';
import Bio from './components/Bio';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import evangelion from './assets/APESARDETUDOAMOR.jpg';
import cafe from './assets/REI ETERNO3.jpg';

function App() {

  return (
    <>
      <Header />
      <Bio />
      <Card 
        title="Apesar de Tudo, Amor" 
        description="Na série Apesar de Tudo, Amor, Park Jae-Eon (Song Kang) é um estudante universitário com especialização em arte. Gostado por todos, ele possui uma personalidade bastante alegre. Apesar de tudo, o jovem é indiferente ao amor, nunca tendo desejado um relacionamento romântico. Quando ele inesperadamente se apaixona por Yoo Na-Bi (Han So-Hee), tudo começa a mudar, precisando repensar suas crenças." 
        image={evangelion} 
        imageAlt="robozinhos legais do evagelion"
      />
      <Card 
        title="O Rei Eterno" 
        description=" É uma série sul-coreana de drama e fantasia que foi lançada em 2020. A história segue a vida de dois personagens principais: Lee Gon, o imperador do Reino da Coreia, e Jung Tae-eul, uma detetive da Coreia do Sul. Eles se encontram em um mundo paralelo e embarcam em uma jornada perigosa para desvendar segredos e proteger seus respectivos reinos. A série explora temas de amor, destino e poder enquanto os personagens enfrentam desafios interdimensionais."
        image={cafe} 
        imageAlt="café da tarde"
      />
      <Footer name="Ayndiara"/>
    </>
  )
}

export default App
