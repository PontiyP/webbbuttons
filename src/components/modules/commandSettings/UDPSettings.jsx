import {useCommandStore} from "../../../stores/useCommandStore.js";
import {useButtonStore} from "../../../stores/useButtonStore.js";
import Input from "../../common/Input.jsx";

const UdpSettings = () => {
    const { commands, setCommandSettings} = useCommandStore();
    const selectedButton = useButtonStore((state) => state.selectedButton);
    const command = commands[selectedButton] || {};

    return (
        <>
            <label>UDP Порт:</label>
            <Input
                type="number"
                min = {0}
                max={65535}
                className="w-fit"
                style={{ width: "6ch" }}
                value={command.settings?.port || ""}
                onChange={(e) =>
                    setCommandSettings(selectedButton, { ...command.settings, port: e.target.value })
                }
                onInput={(e) => {
                    const value = e.target.value;
                    if (value > 65535) e.target.value = 65535;
                    if (value < 0) e.target.value = 0;
                }}
            />
            <label>UDP Payload:</label>
            <Input
                type="text"
                // className="border p-2 w-full"
                value={command.settings?.payload || ""}
                onChange={(e) =>
                    setCommandSettings(selectedButton, { ...command.settings, payload: e.target.value })
                }
            />
        </>
    );
};

export default UdpSettings;
