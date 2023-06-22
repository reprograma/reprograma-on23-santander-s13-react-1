import Salem from '../assets/salem.jpeg'
import PocoEncantado from '../assets/PocoEncantado.jpg'
import Filme from '../assets/filme_8027.jpg'
import Subtitle from '../componets/Subtitle'

function EverythingILove() {

    return (
        <>
            <main className='container-favorites'>
                <div className='movies'>

                    <img src={Filme} />
                    <div className='section-movies'>
                        <Subtitle>Meu filme favorito - O Nevoeiro</Subtitle>
                        <p>O Nevoeiro é uma obra-prima, principalmente por realmente entender o significado
                            por trás da loucura literária idealizada por Stephen King e por trazer à tela
                            uma crítica que todos precisavam observar com os próprios olhos para absorver.
                            A construção narrativa é épica e consegue perpassar as diversas facetas das emoções
                            humanas, oscilando de forma inenarrável entre a paz e o medo, o ódio e o amor – e
                            a loucura e a sanidade.</p></div>
                </div>

                <div className="nature">

                    <img src={PocoEncantado} />
                    <div className='section-nature'>
                        <Subtitle>Amor a natureza - Verdadeiro encontro com a paz</Subtitle>
                        <p>Mergulhar no Poço Azul é uma das experiências mais impressionantes entre os passeios
                            da Chapada Diamantina. E como se não bastasse a incrível tonalidade da água,
                            o Poço Azul oferece ainda o espetáculo do raio de sol,tive a oportunidade de
                            presenciar esse lugar lindo e sentir a verdadeira paz interior. </p>
                    </div>
                </div>

                <div className="cats">

                    <img src={Salem} />
                    <div className='section-cats'>
                        <Subtitle>Meu pequeno Salém</Subtitle>
                        <p>Sou muito apaixonada por gatos desde pequena, se eu pudesse adotava todos que moram
                            na rua, e daria muito amor e carinho.
                            Esse gatinho da foto é meu pequeno Salém, meu companheiro e amigo Pet.
                        </p>
                    </div>
                </div>

            </main>
        </>
    )
}


export default EverythingILove;