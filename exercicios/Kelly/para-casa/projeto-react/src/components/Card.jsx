import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

function Card(props){
    return(
        <div className="card">
            <Title text={props.title}/>
            <Text text={props.description}/>
            <Image className="img" img={props.image}/>
        </div>
    )
}
export default Card