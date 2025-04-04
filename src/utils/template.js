export function replaceTemplate(template, data) {
    return template.replace(/\$\{data\.(.+?)\}/g, (_, path) => {
        const keys = path.split('.');
        let value = data;

        for (const key of keys) {
            if (value && key in value) {
                value = value[key];
            } else {
                return ''; // если ключ не найден — вернуть пусто
            }
        }

        return value ?? '';
    });
}
