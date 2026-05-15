import './Feature.css'

const Feature = (props)=> {
    return (
        <div className="feature-item">
            <img src={props.image} alt="chat Icon" className="feature-icon"/>
            <h3 className="feature-item-title">{props.title}</h3>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Feature