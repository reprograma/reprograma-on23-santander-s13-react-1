import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import nai from "../components/image/naira.jpeg"

function Bio(){
    return(
       <>
        <Title text="Náira Nogueira"/>
        <Text text="Sou Náira Nogueira, atualmente estou fazendo transição de carreira. Sou aluna da Reprograma no curso de Desenvolvedora Front-End."/>
        <Image img={nai} description="Naira"/>
      </>
    )
}

export default Bio;