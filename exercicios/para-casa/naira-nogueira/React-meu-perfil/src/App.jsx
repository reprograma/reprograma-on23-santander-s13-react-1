import './App.css'
import  Header  from './components/Header'
import  Bio  from './components/Bio'
import  Cards  from './components/Cards'
import  Footer  from './components/Footer'

import html from './components/image/html.jpg'
import css from './components/image/css.jpg'
import js from './components/image/js.jpg'
import react from './components/image/react.jpg'


function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Cards 
      title="HTML" 
      description="O HTML é uma linguagem utilizada na construção de websites. Essa tecnologia é fruto da junção entre os padrões HyTime e SGML. " 
      image={html}
      imageAlt="html"
      />

<Cards 
      title="CSS" 
      description="CSS (Cascading Style Sheets) é o mecanismo que da cor e estilo para a Website." 
      image={css}
      imageAlt="css"
      />

<Cards 
      title="JS" 
      description="JS (JavaScript) é a linguagem de programação estruturada e de alto nível de script. O html, css e JS são as principais tecnologias da World Wide Web. " 
      image={js}
      imageAlt="js"
      />

<Cards 
      title="REACT" 
      description="React é uma ferramenta Front-End JavaScript de código aberto com a função de criar as websites." 
      image={react}
      imageAlt="react"
      />

      <Footer name="Náira Nogueira"/>
    </div>
  )
}

export default App