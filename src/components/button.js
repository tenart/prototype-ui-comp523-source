import "./button.css";

const Button = (props) => {
    const onClick = props.onClick;
    const className = props.className;
    const style = props.style;

    const special = props.special;
    const warn = props.warn;
    const go = props.go;

    let classes = className + " component-button";
    if (special) {
        classes += " special";
    } else if (warn) {
        classes += " warn";
    } else if (go) {
        classes += " go";
    }

    return (
        <button style={style} className={classes} onClick={onClick}>
            {props.children}
        </button>
    );
}

export default Button;