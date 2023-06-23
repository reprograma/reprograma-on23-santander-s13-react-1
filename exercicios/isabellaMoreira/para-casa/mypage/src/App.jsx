import Card from './componentes/Card'
import Bio from './componentes/Bio'
import './App.css'
import myphoto from './assets/myphoto.jpg'
import jsphoto from './assets/jsimagem.jpg'
import frontphoto from './assets/frontend.jpg'
import designerphoto from './assets/design.png'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

function App() {


  return (
    <>
     <div className="app">
      <Header
      title="Minha página de conteúdos favoritos"
      />
      <Bio
        photo={myphoto}
        title="Olá, sou Isabella Moreira."
        text=" Estudo Análise e Desenvolvimento de Sistemas e sou aluna da Reprograma, onde estou em transição de carreira para a área de Frontend. Estou empolgada em mergulhar no mundo do desenvolvimento web, explorando novos conceitos, tecnologias e frameworks. Minha paixão está na criação de interfaces atraentes e intuitivas, buscando proporcionar uma experiência de usuário excepcional. Estou comprometida em aprimorar minhas habilidades e colaborar em projetos desafiadores, com o objetivo de construir uma carreira sólida como desenvolvedora frontend. Estou animada com as oportunidades que a tecnologia oferece e pronta para enfrentar os desafios que surgirem no meu caminho."
      />
      <Card
        photo={jsphoto}
        title="JavaScript"
        text="
        JavaScript é uma linguagem de programação versátil e poderosa, amplamente utilizada no desenvolvimento web. Com JavaScript, é possível adicionar interatividade e dinamismo aos sites, criando funcionalidades como animações, validações de formulários, manipulação do DOM e muito mais. Além disso, JavaScript também é utilizado no desenvolvimento de aplicações back-end, através de frameworks como Node.js. Sua sintaxe amigável e flexibilidade tornam-no uma escolha popular entre os desenvolvedores, permitindo a criação de soluções eficientes e escaláveis. Com JavaScript, as possibilidades são praticamente infinitas, e seu constante crescimento e evolução garantem que continue sendo uma ferramenta essencial no mundo da programação."
      />
      <Card
        photo={frontphoto}
        title="Frontend"
        text="Frontend refere-se à parte visual e interativa de um aplicativo ou website. É a área responsável por criar interfaces atraentes e funcionais, garantindo uma experiência do usuário excepcional. O desenvolvedor frontend utiliza tecnologias como HTML, CSS e JavaScript para traduzir o design em código executável, construindo layouts responsivos e interativos. Além disso, é fundamental ter conhecimentos em frameworks e bibliotecas populares, como React, Angular e Vue.js, que facilitam o desenvolvimento frontend. Um desenvolvedor frontend habilidoso combina criatividade e habilidades técnicas para criar interfaces intuitivas, garantindo a usabilidade e a navegabilidade dos aplicativos. Com a constante evolução da web, o frontend é uma área dinâmica e emocionante, repleta de oportunidades para inovar e impactar a experiência digital dos usuários."
      />
      <Card
        photo={designerphoto}
        title="UX Design"
        text="UX Design, ou Design de Experiência do Usuário, é uma disciplina que se concentra em criar produtos e serviços centrados no usuário. Os profissionais de UX Design são responsáveis por entender as necessidades, desejos e expectativas dos usuários, além de garantir que suas interações sejam eficientes e agradáveis. Eles utilizam técnicas de pesquisa, como entrevistas e testes de usabilidade, para obter insights valiosos sobre o público-alvo. Com base nesses insights, os UX Designers criam wireframes, protótipos e fluxos de interação, desenvolvendo soluções que priorizam a usabilidade, a acessibilidade e a satisfação do usuário. O objetivo final do UX Design é criar experiências significativas e memoráveis, que agreguem valor aos usuários e impulsionem o sucesso do produto ou serviço."
      />
      <Footer
        name="Isabella Moreira"
      />
    </div>
    </>
  )
}

export default App
