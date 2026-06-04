import './Button.css'

function Button(props){
    return (
        <button
            className="edit-button"
            onClick={props.onClick}
            type={props.type}
        >
            {props.txt}
        </button>
    )
}

export default Button;