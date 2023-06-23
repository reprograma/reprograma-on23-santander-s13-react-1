import evangelion from './evangelion.webp' 

function Image(props) { // imagem, texto, class, 
  return (
    <> 
      <img className={props.class} src={props.image ?? evangelion}/>
      <p>{props.caption ?? ""}</p>
    </>
  )
}

export default Image
2
