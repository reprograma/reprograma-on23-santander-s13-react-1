import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import kelly from '../assets/kelly.gif'

function Bio(){
    return(
        <div className="card">
            <Title text="Kelly Oliveira"/>
            <Text text="minha descrição"/>
            <Image img={kelly}/>
        </div>
    )
}
export default Bio