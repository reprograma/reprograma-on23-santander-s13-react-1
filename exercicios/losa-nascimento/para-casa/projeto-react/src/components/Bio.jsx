import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import fotol from '../assets/fotol.png'

function Bio() {
  return (
    <div className="card">
      <Title text="Losa Nascimento"/>
      <Text text="Pisciana desbravando o grande mundo da tecnologia, Losa possui uma grande admiração pelas possibilidades de viver em mudanças significativas em relação a todos os espaços sociais que preenchem nossa sociedade, sendo assim observou uma potência no setor da tecnologia e segue seu caminho para construir um futuro harmonioso. Continuem a nadar, piscianas."/>
      <Image img={fotol} description="losa"/>
    </div>
  )
}

export default Bio