import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import emilia from "../assets/emiliajorda.jpeg"

function Bio() {
    return (
        <div className="card">
            <Title text="Emilia Jordana" />
            <Text text="Eu sou Emília Jordana Cerqueira, mãe de 3 pirralhes ,amo animais e a natureza.
Não recuso um dia no mato e você nunca irá me encontrar em um shopping.
Estudei ate o 6 semestre de serviço social mas me descobrir apaixonada por tecnologia. A tecnologia me empodera e eu não vejo a hora de me tornar uma Desenvolvedora."/>
            <Image img={emilia} description="emilia" />
        </div>
    )
}

export default Bio