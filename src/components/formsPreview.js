import { BiTable } from "react-icons/bi";
import Button from "./button";

const FormBlock = (props) => {

    const name = props.name;

    const css = {
        formBlock: {
            boxShadow: "inset 0 0 0 1px var(--theme-black-01)",
            backgroundColor: "var(--theme-black-0-5)",
            // padding: "10px",
            borderRadius: "var(--round-sm)",
            overflow: "hidden",
            whiteSpace: "nowrap"
        },
        formName: {
            color: "var(--theme-main)",
            padding: "10px",
            paddingBottom: "0"
        },
        formIcon: {
            padding: "10px",
        },
        sub: {
            padding: "10px",
            borderLeft: "1px dotted var(--theme-black-01)",
            display: "flex",
            alignItems: "center",
        }
    }

    return(
        <div style={css.formBlock}>
            <p style={css.formName}>
                {name}
            </p>
            <hr/>
            <div className="flex-row" style={{marginTop: "-10px"}}>
                <div style={css.formIcon} className="flex-center flex-no-shrink">
                    <BiTable/>
                </div>
                <div style={css.sub} className="flex-grow">
                    Template A
                </div>
                <div style={css.sub} className="flex-grow">
                    5 Technicial Fields
                </div>
                <div style={css.sub} className="flex-grow">
                    4 Pathologist Fields
                </div>
            </div>
        </div>
    );

}

const FormsPreview = (props) => {

    const css = {
        title: {
            fontWeight: "bold",
            color: "var(--theme-main)",
            fontSize: "var(--text-lg)"
        }
    }

    return(
        <div className="forms-preview panel flex-col">
            <h3 style={css.title}>
                Forms Overview
            </h3>
            <div className="spacer-20"/>
            <div style={css.section}>
                <FormBlock
                    name="Control Confirmation of Acceptability Log"
                />
                <div className="spacer-10"/>
                <FormBlock
                    name="Reagent Lot Confirmation of Acceptability Log"
                />
                <div className="spacer-10"/>
                <FormBlock
                    name="Another Form Name"
                />
            </div>
            <div className="spacer-20"/>
            <div className="flex-grow"/>
            <div>
                <Button>Create New Template</Button>
            </div>
        </div>
    );

}

export default FormsPreview;