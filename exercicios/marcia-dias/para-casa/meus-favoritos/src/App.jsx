import  Header  from './components/Header'
import Banner from './components/Banner'
import Bio from './components/Bio'
import Conteiner from './components/Conteiner'
import Cards from './components/Cards'
import Footer from './components/Footer'

import './App.css'



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Bio />
      <Conteiner >
        <section className='card'>
        <Cards 
        nome="1. Quentin Tarantino" 
        descricao="Quentin Jerome Tarantino é um diretor de cinema, roteirista, produtor, ator, diretor de fotografia e crítico de cinema americano. É vencedor de dois Oscars de Melhor Roteiro Original e foi eleito o 19° maior diretor de cinema dos últimos 25 anos segundo o levantamento da Quartz através do Metacritic."
        foto="https://filmfilicos.com/wp-content/uploads/2020/11/ba4e51dbabcc361e9393d32f2514624d.gif"
        />
      
        <Cards 
        nome="2. Tim Burton"
        descricao="Timothy Walter Burton é um cineasta, produtor, roteirista, escritor, animador e desenhista norte-americano. Seus filmes apresentam, sempre, aspectos góticos, fantasiosos, excêntricos ou sombrios."
        foto="https://media2.giphy.com/media/3og0IKMmOZE88Ankty/giphy.gif"
        />

        <Cards 
        nome="3. Stephen King"
        descricao="Stephen Edwin King é um escritor norte-americano de terror, ficção sobrenatural, suspense, ficção científica e fantasia. Os seus livros já venderam mais de 400 milhões de cópias, com publicações em mais de 40 países. É o 9º autor mais traduzido no mundo."
        foto="https://media3.giphy.com/media/qWf6GRN9q0D8Q/giphy.gif"
        />

        <Cards 
        nome="4. Pedro Almodóvar"
        descricao="Pedro Almodóvar Caballero é um cineasta, ator e argumentista espanhol. Seus filmes são marcados pelo melodrama, irreverente humor, cores ousadas, decoração brilhante, citações da cultura popular e complexas narrativas. Desejo, paixão, família e identidade estão entre os temas mais frequentes nos filmes de Almodóvar."
        foto="https://4.bp.blogspot.com/-Y2QlCvgxS3E/VxeZ0d_umfI/AAAAAAAAsV4/6aR34Q4q8Domnw4cwCcA04FS2NXIG0S-wCLcB/s1600/Entre-Tinieblas09.gif"
        />

        <Cards 
        nome="5. Stanley Kubrick"
        descricao="Stanley Kubrick (Manhattan, Nova Iorque, 26 de julho de 1928 — St Albans, Hertfordshire, 7 de março de 1999) foi um cineasta, roteirista, produtor e fotógrafo estadunidense. Frequentemente apontado como um dos cineastas mais influentes do cinema, seus filmes, que são principalmente adaptações de romances ou contos, cobrem uma ampla variedade de gêneros e são conhecidos por seu realismo, humor sombrio, cinematografia única, extensos cenários e uso evocativo da música."
        foto="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-wS439ZTREKlRdg4ooiNvc9RnaKxGbfdpPSU5EXC9M8tOOSCJ_3ssLVLcT6ENp8KMdgBm37_cwDgqXQP2xZx24abhV-0qgaHOxsvvZ-G-wYHgdE3fkwWPhF5l2xqaJB311Y2JCznja9pE9K_maQwQGjP8MuMIAJYczQ-Li5h04jXHZMVgGkDhTORo4A/s400/AdeptSentimentalGrayreefshark-size_restricted.gif"
        />  

        <Cards 
        nome="Bônus: Guillermo del Toro"
        descricao="Meu novo queridinho, Guillermo del Toro é um cineasta, roteirista e produtor mexicano. Criado pela sua avó, Del Toro desenvolveu interesse por cinema quando adolescente. Mais tarde, aprendeu sobre efeitos e maquiagem com Dick Smith (que trabalhara em O Exorcista e vários curta-metragens). Por dez anos, trabalhou como supervisor de maquiagem, até formar a sua própria companhia, Necropia, no começo dos anos 80. Dirigiu ainda programas para a TV Mexicana, onde aprendeu a fazer filmes."
        foto="https://1.bp.blogspot.com/-qeLETOSZX34/W09JcGtO1sI/AAAAAAAAFAw/hcyQeC39Pz835zB-D4JLmfPygv3ySiyjQCLcBGAs/s1600/fauno.gif"
        />

        </section>
      </Conteiner> 
        <Footer />
    </div>
  )
}

export default App