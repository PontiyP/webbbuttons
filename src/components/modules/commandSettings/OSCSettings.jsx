import {useCommandStore} from "../../../stores/useCommandStore.js";
import {useButtonStore} from "../../../stores/useButtonStore.js";
import Input from "../../common/Input.jsx";

const OSCSettings = () => {
    const {commands, setCommandSettings} = useCommandStore();
    const selectedButton = useButtonStore((state) => state.selectedButton);
    const command = commands[selectedButton] || {};

    return (
        <>
            <Input
                type="number"
                min = {0}
                max={65535}
                className="w-fit"
                style={{ width: "6ch" }}
                placeholder="Port"
                value={command.settings?.port || ""}
                onChange={(e) =>
                    setCommandSettings(selectedButton, {...command.settings, port: e.target.value})
                }
                onInput={(e) => {
                    const value = e.target.value;
                    if (value > 65535) e.target.value = 65535;
                    if (value < 0) e.target.value = 0;
                }}
            />
            <Input
                type="text"
                placeholder="IP Address (e.g., 192.168.1.100)"
                value={command.settings?.address || ""}
                onChange={(e) =>
                    setCommandSettings(selectedButton, {...command.settings, address: e.target.value})
                }
            />

            <Input
                type="text"
                placeholder="OSC Message (e.g., /play 1)"
                value={command.settings?.message || ""}
                onChange={(e) =>
                    setCommandSettings(selectedButton, {...command.settings, message: e.target.value})
                }
            />
        </>
    );
};

export default OSCSettings;
