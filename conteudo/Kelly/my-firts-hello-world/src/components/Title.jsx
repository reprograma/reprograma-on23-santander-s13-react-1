function Title (props) {
    const texto = props.text.toUpperCase()
    return(
       
        <h1>{props.text}</h1>
        
    )
}

//const Title = () => {
 //   return(
  //      <>
   //         <h1>Bem vindos</h1>
   //     </>
   // )
   // }

export default Title; // importar esse componente em outros lugares do projeto