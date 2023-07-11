export function ValidationSchema(value: string, name: string): string | null {
    if (isNaN(Number(value))) return 'Недопустимое значение';
    if (Number(value) < 0) return 'Значение не может быть отрицательным';
    if (name === 'speed') {
        if (Number.isInteger(value)) {
            return null;
        }
    } else if (name === 'force') {
        if (typeof value === 'number' && Number(value) > 0) {
            return null;
        }
    } else if (name === 'engineAmperage') {
        if (Number.isInteger(value) && Number(value) > 0) {
            return null;
        }
    }
    return null
}