import './style.sass';

function IconButton(props) {
    return (
        <button className='icon-button' type={ props.type ? props.type : "button"} onClick={() => props.function ? props.function() : () => {}}>
            <ion-icon
                name={props.name}
                class={
                    (props.size ? props.size : "md") + " " +
                    (props.color ? props.color : "light")
                }
            ></ion-icon>
        </button>
    )
}

export { IconButton };