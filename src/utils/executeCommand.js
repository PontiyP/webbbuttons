// export const executeCommand = async (command) => {
//     if (!command || !command.type) {
//         console.warn("Команда не указана");
//         return;
//     }
//
//     try {
//         const res = await fetch("http://localhost:3001/execute", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 type: command.type,
//                 settings: command.settings,
//             }),
//         });
//
//         const result = await res.json();
//         console.log("Ответ от сервера:", result);
//     } catch (err) {
//         console.error("Ошибка отправки команды:", err);
//     }
// };

export const executeCommand = async (command) => {
    if (!command || !command.type) {
        console.warn("Команда не указана");
        return;
    }

    try {
        console.log("Отправляем команду:", command);

        const res = await fetch("http://localhost:3001/execute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: command.type,
                settings: command.settings,
            }),
        });

        const result = await res.json();
        console.log("Ответ от сервера:", result);
        return result; // <-- возвращаем!
    } catch (err) {
        console.error("Ошибка отправки команды:", err);
        return null; // чтобы не было undefined
    }
};
