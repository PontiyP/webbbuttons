import {useCommandStore} from "../../../stores/useCommandStore.js";
import {useButtonStore} from "../../../stores/useButtonStore.js";
import Input from "../../common/Input.jsx";
import Select from "../../common/Select.jsx";
import {executeCommand} from "../../../utils/executeCommand.js";

const HttpSettings = () => {
    const {commands, setCommandSettings} = useCommandStore();
    const selectedButton = useButtonStore((state) => state.selectedButton);
    const command = commands[selectedButton] || {};

    const { setLastResponse, lastResponse } = useCommandStore();
    const { setButton } = useButtonStore();

    const handleTestCommand = async () => {
        const res = await executeCommand(command);

        let parsedData = res?.data;
        if (typeof parsedData === "string") {
            try {
                parsedData = JSON.parse(parsedData);
            } catch {
                console.warn("Ошибка парсинга");
            }
        }

        // Сохраняем в глобальный response
        setLastResponse({ ...res, data: parsedData });

        // Сохраняем в выбранную кнопку
        setButton(selectedButton, { dynamicData: parsedData });

        console.log("Сохранили dynamicData в кнопку:", parsedData);
    };



    const methodOptions = [
        {value: "", label: "Method Type"},
        {value: "GET", label: "GET"},
        {value: "POST", label: "POST"},
        {value: "PUT", label: "PUT"},
        {value: "DELETE", label: "DELETE"},
    ];
    const payloadOptions = [
        {value: "", label: "Payload Type"},
        {value: "json", label: "JSON"},
        {value: "string", label: "String"},
        {value: "boolean", label: "Boolean"},
    ];
    const boolianOptions = [
        { value: "", label: "True?" },
        { value: "true", label: "True" },
        { value: "false", label: "False" },
    ]

    const payloadType = command.settings?.payloadType || "";

    return (
        <>
            <Input
                type="text"
                placeholder="https://api.example.com"
                value={command.settings?.url || ""}
                onChange={(e) =>
                    setCommandSettings(selectedButton, {...command.settings, url: e.target.value})
                }
            />
            <div className="flex gap-2">
                <Select
                    options={methodOptions}
                    value={command.settings?.method || ""}
                    onChange={(e) =>
                        setCommandSettings(selectedButton, {...command.settings, method: e.target.value})
                    }
                />

                <Select
                    options={payloadOptions}
                    value={payloadType}
                    onChange={(e) =>
                        setCommandSettings(selectedButton, {...command.settings, payloadType: e.target.value})
                    }
                />
                <button
                    className="flex-1 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={handleTestCommand}
                >
                    Test Command
                </button>

            </div>
            {payloadType === "json" ? (
                <textarea
                    className="w-full p-2 overflow-hidden bg-transparent
        border-[3px] border-[var(--main-color)]
        rounded-[6px] outline-0"
                    style={{ minHeight: "80px" }}
                    value={command.settings?.rawPayload || ""}
                    placeholder="Enter JSON payload"
                    onChange={(e) => {
                        const raw = e.target.value;
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;

                        let parsedPayload = {};
                        try {
                            parsedPayload = JSON.parse(raw);
                        } catch {
                            parsedPayload = {};
                        }

                        setCommandSettings(selectedButton, {
                            ...command.settings,
                            rawPayload: raw,
                            payload: parsedPayload
                        });
                    }}
                />
            ) : payloadType === "boolean" ? (
                <Select
                    value={command.settings?.payload === true ? "true" : command.settings?.payload === false ? "false" : ""}
                    options={boolianOptions}
                    onChange={(e) => {
                        const value = e.target.value;
                        setCommandSettings(selectedButton, {
                            ...command.settings,
                            rawPayload: value,
                            payload: value === "true" ? true : value === "false" ? false : null,
                        });
                    }}
                />
            ) : (
                <Input
                    type="text"
                    value={command.settings?.rawPayload || ""}
                    placeholder="Enter payload"
                    onChange={(e) => {
                        const raw = e.target.value;
                        setCommandSettings(selectedButton, {
                            ...command.settings,
                            rawPayload: raw,
                            payload: raw
                        });
                    }}
                />
            )}

            {lastResponse && (
                <div className="mt-2 p-2 text-sm bg-gray-800 text-white rounded relative">
                    <button
                        onClick={() => setLastResponse(null)}
                        className="absolute top-2 right-2 text-xs px-2 py-1 rounded hover:bg-red-600"
                    >
                       X
                    </button>
                    <strong>Status:</strong> {lastResponse.status} <br />
                    <strong>Data:</strong>
                    <pre className="whitespace-pre-wrap break-words">{JSON.stringify(lastResponse.data, null, 2)}</pre>
                </div>
            )}


        </>
    );
};

export default HttpSettings;
