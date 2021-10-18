import { useState } from "react";
import Button from "./button";
import "./css/resumeFormPanel.css"

const TableRow = (props) => {
    const row = props.row;
    return (
        <tr>
            {row.map((item, i) => {
                return(
                    <td key={i}>{item}</td>
                )
            })}
        </tr>
    )
}

const ResumeFormPanel = (props) => {

    const setDataView = props.setDataView;

    const [table, updateTable] = useState([
        ["1/22/21", "Block 1", "ER", "", "100"],
        ["2/22/21", "Block 3", "ER", "Endocervix, Cervix, Tonsil", "100"],
        ["3/23/21", "ER/PR 5", "ER", "Endocervix, Cervix, Tonsil", "100"],
        ["4/15/21", "ER/PR 6", "ER", "", "100"],
        ["5/21/21", "ER/PR 8", "ER", "Endocervix, Cervix, Tonsil", "100"],
        ["6/22/21", "ER/PR 8 Cast", "ER", "", "980"],
        ["7/02/21", "ER/PR 12", "ER", "Endocervix, Cervix, Tonsil", "100"],
        ["9/20/21", "ER/PR 18 F/L", "ER", "", "100"],
    ])

    return (
        <div className="panel flex-col">
            <h2 className="text-lg text-bold theme-text">
                In-Progress Log
            </h2>
            <div className="spacer-20"/>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Block ID / Lot #</td>
                        <td>Stain</td>
                        <td>Tissue Type</td>
                        <td># of Slides</td>
                    </tr>
                </thead>

                {table.map((row, i) => {return(
                    <TableRow key={i} row={row}/>
                )})}

                <tr className="new-row-header">
                    <td colspan={5}>
                        Enter a New Row
                    </td>
                </tr>
                <tr className="new-row-form">
                    <td>
                        <input type="number" placeholder="Date"></input>
                    </td>
                    <td>
                        <input type="text" placeholder="Block ID"></input>
                    </td>
                    <td>
                        <input type="text" placeholder="Stain"></input>
                    </td>
                    <td>
                        <input type="text" placeholder="Tissue Type"></input>
                    </td>
                    <td>
                        <input type="number" placeholder="# of Slides"></input>
                    </td>
                </tr>
            </table>

            <div className="spacer-20"/>
            <div className="flex-row">
                <Button go>Submit Row</Button>
                <div className="spacer-10 flex-grow"/>
                <Button>Clear</Button>
                <div className="spacer-10"/>
                <Button warn onClick={() => {setDataView("manage")}}>Cancel</Button>
            </div>

            {/* <div className="spacer-20"/>
            <h2 className="text-lg text-bold theme-text">
                Enter New Row
            </h2>
            <div>
                <form>

                </form>
            </div> */}

        </div>
    )
}

export default ResumeFormPanel;