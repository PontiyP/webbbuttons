import Input from "../common/Input.jsx";
import Radio from "../common/Radio.jsx";
import AlignTopIcon from "../../icons/AlignTopIcon.jsx";
import AlignCenterIcon from "../../icons/AlignCenterIcon.jsx";
import AlignBottomIcon from "../../icons/AlignBottomIcon.jsx";
import AlignLeftIcon from "../../icons/AlignLeftIcon.jsx";
import AlignMiddleIcon from "../../icons/AlignMiddleIcon.jsx";
import AlignRightIcon from "../../icons/AlignRightIcon.jsx";
import Select from "../common/Select.jsx";
import FontSizeIcon from "../../icons/FontSizeIcon.jsx";
import {useButtonStore} from "../../stores/useButtonStore.js";
import AutoRepeatSettings from "./AutoRepeatSettings.jsx";

const ButtonStyler = () => {

    const iconSize = "2vw"

    const verticalOptions = [
        { value: "items-start", icon: <AlignTopIcon size={iconSize} color={"#ffffff"} /> },
        { value: "items-center", icon: <AlignCenterIcon size={iconSize} color={"#fff"} /> },
        { value: "items-end", icon: <AlignBottomIcon size={iconSize} color={"#fff"} /> }
    ];
    const horisontalOptions = [
        { value: "justify-start", icon: <AlignLeftIcon size={iconSize} color={"#fff"} /> },
        { value: "justify-center", icon: <AlignMiddleIcon size={iconSize} color={"#fff"} /> },
        { value: "justify-end", icon: <AlignRightIcon size={iconSize} color={"#fff"} /> }
    ];

    const { selectedButton, setEditing, setButton, buttons, removeButton, uploadButtonImage } = useButtonStore();
    const isDisabled = !selectedButton;
    const buttonSettings = buttons[selectedButton] || {};


    return (
        <div className="mt-4 border-b border-[var(--main-color)] flex justify-between items-end"
             onMouseEnter={() => setEditing(true)}
             onMouseLeave={() => setEditing(false)}
        >
            <h1 className="ml-2 w-2/5">Button Style</h1>
            <div className="flex flex-wrap justify-end gap-2 mb-1">
                <Input
                    type="color"
                    label={"brdr"}
                    id={"brdr"}
                    value={buttonSettings.brdrColor || "#000000"}
                    onChange={(e) => setButton(selectedButton, { brdrColor: e.target.value })}
                    disable={isDisabled}
                                   />
                <Input
                    type="file"
                    label={"BG Img"}
                    id={"fileInput"}
                    iconSize={iconSize}
                    onChange={(e) => {
                        const file = e.target.files[0];
                        uploadButtonImage(selectedButton, file);
                        e.target.value = "";
                    }}
                    disable={isDisabled}
                />
                <Input
                    type="color"
                    label={"BG"}
                    value={buttonSettings.bgColor || "#ffffff"}
                    onChange={(e) => setButton(selectedButton, { bgColor: e.target.value })}
                    disable={isDisabled}
                                   />
                <Radio
                    name="vAlign"
                    options={verticalOptions}
                    selectedValue={buttonSettings.vAlign || "center"}
                    onChange={(value) => setButton(selectedButton, { vAlign: value })}
                    disable={isDisabled}
                />
                <Radio
                    name="hAlign"
                    options={horisontalOptions}
                    selectedValue={buttonSettings.hAlign || "left"}
                    onChange={(value) => setButton(selectedButton, { hAlign: value })}
                    disable={isDisabled}
                />
                <Input
                    type="text"
                    placeholder={"Button title"}
                    value={buttonSettings.title || ""}
                    onChange={(e) => setButton(selectedButton, { title: e.target.value })}
                    className="w-1/2"
                    disable={isDisabled}
                />
                <Select
                    icon={FontSizeIcon}
                    iconSize={iconSize}
                    value={buttonSettings.textSize}
                    onChange={(e) => setButton(selectedButton, { textSize: e.target.value })}
                    disable={isDisabled}
                    options={[
                        { value: "clamp(10px, 3vw, 72px)", label: "Auto" },
                        { value: "36px", label: "Small" },
                        { value: "48px", label: "Medium" },
                        { value: "60px", label: "High" },
                        { value: "72px", label: "Max" },
                    ]}
                />
                <Input
                    type="color"
                    label={"T"}
                    value={buttonSettings.textColor || "#000000"}
                    onChange={(e) => setButton(selectedButton, { textColor: e.target.value })}
                    disable={isDisabled}
                />
                {/*<AutoRepeatSettings/>*/}
                {selectedButton&&
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={()=>{removeButton(selectedButton)}}>Delete
                    </button>}
            </div>
        </div>
    );
};

export default ButtonStyler;
