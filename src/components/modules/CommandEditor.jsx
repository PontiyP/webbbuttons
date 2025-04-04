import {useCommandStore} from "../../stores/useCommandStore.js";
import {useButtonStore} from "../../stores/useButtonStore.js";
import HttpSettings from "./commandSettings/HTTPSettings.jsx";
import UDPSettings from "./commandSettings/UDPSettings.jsx";
import TCPSettings from "./commandSettings/TCPSettings.jsx";
import Select from "../common/Select.jsx";
import AutoRepeatSettings from "./AutoRepeatSettings.jsx";
import OSCSettings from "./commandSettings/OSCSettings.jsx";

const CommandEditor = () => {
    const {commands, setCommandType} = useCommandStore();
    const selectedButton = useButtonStore((state) => state.selectedButton);
    const command = commands[selectedButton] || {};

    if (!selectedButton) return <p className="text-center">Choose any button</p>;

    const commandTypeOptions = [
        {value: "", label: "Command Type"},
        {value: "http", label: "HTTP"},
        {value: "osc", label: "OSC"},
        {value: "tcp", label: "TCP"},
        {value: "UDP", label: "UDP"},
    ]
    return (
        <div
            className="p-4 h-full flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex gap-2">
                <Select
                    value={command.type || ""}
                    onChange={(e) => setCommandType(selectedButton, e.target.value)}
                    options={commandTypeOptions}
                />
                <AutoRepeatSettings/>
            </div>

            {command.type === "http" && (
                <HttpSettings/>
            )}
            {command.type === "osc" && (
                <OSCSettings/>
            )}

            {command.type === "tcp" && (
                <TCPSettings/>
            )}

            {command.type === "udp" && (
                <UDPSettings/>
            )}
        </div>
    );
};

export default CommandEditor;
