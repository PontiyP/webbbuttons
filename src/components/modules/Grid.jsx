import { useEffect} from "react";
import "../../styles/GridStyle.css";
import Button from "../common/Button.jsx";
import {useAppModeStore } from "../../stores/useAppModeStore.js";
import {useTableStore} from "../../stores/useTableStore.js";
import {useButtonStore} from "../../stores/useButtonStore.js";
import {executeCommand} from "../../utils/executeCommand.js";
import {useCommandStore} from "../../stores/useCommandStore.js";

const Grid = () => {
    const { rows, columns, bgColor,width } = useTableStore();
    const { buttons, addButton, selectButton, clearSelection, isEditing } = useButtonStore();
    const { mode } = useAppModeStore();
    const { commands } = useCommandStore();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!isEditing && mode === "edit") clearSelection();
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [clearSelection, isEditing, mode]);

    return (
        <div
            className="table-grid p-1 rounded-lg"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, auto)`,
                backgroundColor: bgColor,
                gap: "3px",
                width: `${width}%`,
            }}
        >
            {Array.from({ length: rows * columns }).map((_, index) => {
                const rowIndex = Math.floor(index / columns);
                const colIndex = index % columns;
                const cellId = `${rowIndex}-${colIndex}`;
                const buttonSettings = buttons[cellId];


                return (
                    <div
                        key={index}
                        className="grid-cell flex justify-center items-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (mode === "edit") {
                                buttons[cellId] ? selectButton(cellId) : addButton(cellId);
                            }
                        }}
                    >
                        {buttons[cellId] ? (
                            <Button
                                id={cellId}
                                title={buttonSettings.title}
                                dynamicData={buttonSettings.dynamicData}
                                bgColor={buttonSettings.bgColor}
                                bgImg={buttonSettings.bgImg}
                                textColor={buttonSettings.textColor}
                                textSize={buttonSettings.textSize}
                                brdrColor={buttonSettings.brdrColor}
                                hAlign={buttonSettings.hAlign}
                                vAlign={buttonSettings.vAlign}
                                onClick={mode === "play" ? () => executeCommand(commands[cellId]): ()=>{} }
                            />
                        ) : (

                            <span className="flex justify-center items-center text-2xl text-gray-500 w-full h-full border-2 rounded-md border-gray-500">
                                {mode === "edit" && "+"}
                            </span>

                        )}

                    </div>
                );
            })}
        </div>
    );
};

export default Grid;
