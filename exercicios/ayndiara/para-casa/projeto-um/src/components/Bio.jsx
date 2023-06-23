import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import lili from '../assets/investimento3.jpg'

function Bio() {
  return (
    <div className="card">
      <Title text="Insvestimento de Risco"/>
      <Text text="Investimento de Risco se passa no banco fictício Nara Yeongpo Branch, que está comemorando seu 99º aniversário de fundação, e tem como foco o escandaloso romance de escritório entre Ha Sang Soo (Yoo Yeon-seok, de Hospital Playlist), Ahn Soo Young (Moon Ga-young), Park Mi Kyung (Geum Sae-rok) e Jung Jong Hyun (Jung Ga-ram). 


Sang Soo é o chefe sênior da equipe de consulta do banco, e ele ocupa tal posição já há três anos. O personagem é bonito, inteligente e uma pessoa forte que não se derruba pelas dificuldades da vida, e embora seja uma pessoa correta, ele não é frio e nem muito formal; Sang Soo possui um coração grande e tem um ótimo humor. "/>
      <Image img={lili} description="lilit"/>
    </div>
  )
}

export default Bio
