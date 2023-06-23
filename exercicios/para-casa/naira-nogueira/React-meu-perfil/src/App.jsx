import './App.css'
import  Header  from './components/Header'
import  Bio  from './components/Bio'
import  Cards  from './components/Cards'
import  Footer  from './components/Footer'

import html from './components/image/html.jpg'
import css from './components/image/css.jpg'


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

      <Footer name="Náira"/>
    </div>
  )
}

export default App