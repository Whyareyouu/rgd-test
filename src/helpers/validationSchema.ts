export function ValidationSchema(value: string, name: string): string | null {
    if (isNaN(Number(value))) return 'Недопустимое значение';
    if (Number(value) < 0) return 'Значение не может быть отрицательным';
    if (name === 'speed' || name === 'engineAmperage') {
        if (!Number.isInteger(+value)) {
            return 'Значение должно быть целым числом';
        }
    }
    if (name === 'force' && !Number.isInteger(+value)){
        return 'Значение должно быть числом с плавающей запятой;'
    }
    return null
}