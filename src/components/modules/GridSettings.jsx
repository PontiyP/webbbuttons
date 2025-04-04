import Input from "../common/Input.jsx";
import Rows from "../../icons/Rows.jsx";
// import {useState} from "react";
import Columns from "../../icons/Columns.jsx";
import {useTableStore} from "../../stores/useTableStore.js";
import WidthIcon from "../../icons/WidthIcon.jsx";


const GridSettings = () => {

    const iconSize = "2vw"

    const {rows, columns, bgColor, width, setRows, setColumns, setBgColor, setWidth} = useTableStore();

    return (
        <div className="mt-4 border-b border-[var(--main-color)] flex justify-between items-end">
            <h1 className="ml-2 w-2/5">Grid Settings</h1>
            <div className="flex gap-2 mb-1">
                <Input
                    type="number"
                    placeholder={"0"}
                    icon={Rows}
                    iconSize={iconSize}
                    min={"0"}
                    value={rows}
                    onChange={(e) => setRows(parseInt(e.target.value, 10) || 1)}
                    style={{width: "2.4vw"}}
                />
                <Input
                    type="number"
                    placeholder={"0"}
                    icon={Columns}
                    iconSize={iconSize}
                    min={"0"}
                    value={columns}
                    onChange={(e) => setColumns(parseInt(e.target.value, 10) || 1)}
                    style={{width: "2.4vw"}}
                />
                <Input
                    type="number"
                    placeholder={"0"}
                    icon={WidthIcon}
                    iconSize={iconSize}
                    min={0}
                    max={99}
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    style={{width: "2.4vw"}}
                />
                <Input
                    type="color"
                    label={"BG"}
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                />
            </div>
        </div>
    );
};

export default GridSettings;
