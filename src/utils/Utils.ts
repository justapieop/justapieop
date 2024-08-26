export class Utils {
    public static doubleDigitFormatter(s: number): string {
        const numberStr: string = String(s);

        return numberStr.length === 2 ? numberStr : "0" + numberStr;
    }
}