import fetch from 'node-fetch';

// export default async function httpCommand(settings) {
//     const httpRes = await fetch(settings.url);
//     return { status: 'HTTP OK', statusCode: httpRes.status };
// }

export default async function httpCommand(settings) {
    console.log("HTTP COMMAND SETTINGS:", settings);
    const { url, method = 'GET', payload, headers = {} } = settings;

    const options = {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase())
            ? JSON.stringify(payload || {})
            : undefined,
    };

    console.log("FETCH OPTIONS:", options);

    const httpRes = await fetch(url, options);
    const data = await httpRes.text();

    console.log("RESPONSE STATUS:", httpRes.status);
    console.log("RESPONSE DATA:", data);

    return { status: httpRes.status, data };
}
