const RandomAvatar = (props) => {
    const MAX = 4;
    const PATH = "assets/pexels/";
    const DEFAULT_SIZE = 50;

    const style = props.style;
    const className = props.className;
    const id = props.id;
    const size = props.size;

    let filePath;
    if (id === undefined) {
        let rand = Math.round(Math.random() * MAX);
        filePath = PATH + `${rand}.jpg`;
    } else {
        filePath = PATH + `${id}.jpg`;
    }

    let css = {};
    if (style) css = Object.assign({}, style);
    if (!size) {
        css.height = `${DEFAULT_SIZE}px`; 
        css.width = `${DEFAULT_SIZE}px`;
    } else {
        css.height = `${size}px`; 
        css.width = `${size}px`;
    }

    css.background = `url("${filePath}") center center / cover`;
    css.boxShadow = "inset 0 0 0 1px var(--theme-black-01)";

    return(
        <div className={"random-avatar rounded-full " + className} style={css}/>
    );
}

export default RandomAvatar;