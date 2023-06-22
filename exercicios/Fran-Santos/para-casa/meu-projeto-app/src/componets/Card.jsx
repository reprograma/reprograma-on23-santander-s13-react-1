import Subtitle from "../componets/Subtitle"
import meuAvatar from "../assets/MinhaFoto.jpeg"

function Card() {

    return (

        <main className="container-card">
            <Subtitle>Prazer, eu sou a Fran Santos</Subtitle>
            <img className="meuAvatar" src={meuAvatar} />
            <article>

                <p>Aprender programação do zero foi um desafio muito grande,
                    quando vi a frase "Hello World" renderizar no navegador web pela primeira vez,
                    simplesmente fiquei encantada, meus olhos brilharam e senti uma empolgação muito grande.
                </p>
                <p>
                    Me apaixonei pelo Front-end, pois consigo ver a magia acontecendo diante de meus olhos,
                    posso encantar outras pessoas com meu trabalho. Com 1% de conhecimento adquirido a cada dia,
                    vou chegar longe!
                </p>
            </article>



        </main>

    )
}
export default Card;