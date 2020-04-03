export class CommonUtility {
    public static format(input: string, ...args: any[]): string {
        return input.replace(/{(\d+)}/g, (match, number) => (typeof args[number] !== 'undefined' ? args[number] : match));
    }
}
