import './style.sass';

function Input(props){
    return (
        <input
            className="base-input"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.function ? props.function(e) : () => {}}
        />
    )
}

export { Input };