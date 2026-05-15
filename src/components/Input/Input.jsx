import './Input.css'

const Input=(props) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={props.id}>{props.label}</label
            ><input type={props.type} id={props.id}/>
        </div>
    )
}

export default Input