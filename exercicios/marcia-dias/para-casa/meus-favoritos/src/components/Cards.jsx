function Cards(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <img src={props.foto} />
        </div>
        
    )

}

export default Cards;