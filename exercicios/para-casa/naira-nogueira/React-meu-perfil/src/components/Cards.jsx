import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

function Cards(props){
    return(
       <>
        <Title text={props.title}/>
        <Text text={props.description}/>
        <Image img={props.image} description={props.imageAlt}/>
      </>
    )
}

export default Cards