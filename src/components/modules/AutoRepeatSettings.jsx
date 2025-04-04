import {useButtonStore} from "../../stores/useButtonStore.js";
import Input from "../common/Input.jsx";

const AutoRepeatSettings = () => {
    const {selectedButton, buttons, setButton} = useButtonStore();
    const button = buttons[selectedButton] || {};

    const toggleAutoRepeat = () => {
        setButton(selectedButton, {
            ...button,
            autoRepeat: !button.autoRepeat,
        });
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={toggleAutoRepeat}
                className={`px-2 rounded ${
                    button.autoRepeat ? "bg-green-500" : "bg-gray-500"
                } transition`}
            >
                <label className="text-xs">Repeat </label>
                {button.autoRepeat ? "ON" : "OFF"}
            </button>

            {button.autoRepeat && (
                // <div className="flex items-center gap-2">
                    <Input
                        type="number"
                        placeholder="Interval (ms)"
                        // className="w-24 bg-transparent border border-white text-white px-2 rounded"
                        className="w-2/5"
                        value={button.interval || ""}
                        onChange={(e) => {
                            setButton(selectedButton, {
                                ...button,
                                interval: parseInt(e.target.value, 10),
                            });
                        }}
                        min="100"
                    />
                // </div>
            )}
        </div>
    );
};

export default AutoRepeatSettings;
