function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.imgLink} alt={props.title} />
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.superPower}</p>
            </div>
        </div>
    );
}

export default Card;