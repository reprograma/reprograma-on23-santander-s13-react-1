import Subtitle from "./Subtitle"
import Title from "./Title"
import Image from "./Image"

function Card({image, title, subtitle}) {
  return (
    <div className="cards_container">
      <Title text={title}/>
      <Subtitle>{subtitle}</Subtitle>
      <Image className="image" caption="Titânia - Rainha das fadas" image={image} />
    </div>
  )
}

export default Card
