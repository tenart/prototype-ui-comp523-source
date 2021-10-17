import Button from "./button";

import { FaPlus, FaSearch, FaChevronRight } from"react-icons/fa";

const FormButton = (props) => {

    const onClick = props.onClick;

    const title = props.title;
    const subtitle = props.subtitle;
    const icon = props.icon.icon;
    const color = props.icon.color;

    const css = {
        wrapper: {
            padding: "10px",
            border: "1px solid var(--theme-black-01)",
            borderRadius: "var(--round-sm)",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            textAlign: "left"
        },
        title: {
            marginBottom: "5px"
        },
        subtitle: {
            color: "var(--theme-black-06)"
        },
        iconWrapper: {
            height: "35px",
            width: "35px",
            marginRight: "10px",
            borderRadius: "9999px",
            backgroundColor: color,
            flexShrink: "0",
            color: "white"
        },
        svg: {
            color: "white",
            height: "22px",
            width: "22px"
        }
    }

    return (
        <button onClick={onClick} style={css.wrapper}>
            <div className="flex-center inset-shadow" style={css.iconWrapper}>
                {icon}
            </div>
            <div>
                <h3 className="theme-text" style={css.title}>
                    {title}
                </h3>
                <p className="text-sm" style={css.subtitle}>
                    {subtitle}
                </p>
            </div>
        </button>
    )

}

const FormsHomePanel = (props) => {

    const setView = props.setView;

    return (
        <div className="panel flex-col">
            <h2 className="theme-text text-bold text-lg">
                Forms Center
            </h2>
            <div className="spacer-20"/>
            <div>
                <FormButton 
                    title="Continue"
                    subtitle="Resume where you left off"
                    icon={{icon: <FaChevronRight/>, color: "var(--theme-green)"}}
                    onClick={() => {setView("data")}}
                />
                <FormButton 
                    title="Revisit Slides"
                    subtitle="See slides that need your attention"
                    icon={{icon: <FaSearch/>, color: "var(--theme-green)"}}
                />                
                <FormButton 
                    title="New Test"
                    subtitle="Create a new test"
                    icon={{icon: <FaPlus/>, color: "var(--theme-green)"}}
                />
            </div>
            <div className="spacer-10 flex-grow"/>
            <div className="flex-row">
                <Button onClick={() => {setView("manage")}}>Manage Forms</Button>
            </div>
        </div>
    )

}

export default FormsHomePanel;