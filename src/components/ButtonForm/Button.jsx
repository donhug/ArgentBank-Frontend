import './Button.css'

function Button(props){
    return (
        <button className="edit-button">{props.txt}</button>
    )
}

export default Button;