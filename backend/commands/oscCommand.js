import osc from "osc";

export default async function oscCommand(settings) {
    const { address, port, message } = settings;
    if (!address || !port || !message) {
        throw new Error("Invalid OSC settings");
    }

    const udpPort = new osc.UDPPort({
        localAddress: "0.0.0.0",
        localPort: 0,
        metadata: true,
    });

    udpPort.open();

    return new Promise((resolve, reject) => {
        udpPort.on("ready", () => {
            udpPort.send(
                {
                    address: message.split(" ")[0],
                    args: message.split(" ").slice(1).map(arg => ({
                        type: isNaN(arg) ? "s" : "f",
                        value: isNaN(arg) ? arg : parseFloat(arg),
                    }))
                },
                address,
                parseInt(port, 10)
            );
            udpPort.close();
            resolve({ status: "OSC Message Sent" });
        });

        udpPort.on("error", (err) => {
            udpPort.close();
            reject(err);
        });
    });
}
