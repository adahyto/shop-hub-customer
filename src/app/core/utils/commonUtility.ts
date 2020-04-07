export class CommonUtility {
    public static format(input: string, ...args: any[]): string {
        return input.replace(/{(\d+)}/g, (match, numb) => (typeof args[numb] !== 'undefined' ? args[numb] : match));
    }
    public static randomId(): string {
      return (Math.random() * 12 * 0.3).toString()
    }
}
