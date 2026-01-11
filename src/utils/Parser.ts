export class Parser {
  static toInt(value: string | undefined, defaultValue: number = 0): number {
    const parsedNumber = parseInt(value || "", 10);
    return isNaN(parsedNumber) ? defaultValue : parsedNumber;
  }

  static toHexColor(
    value: string | undefined,
    defaultValue: string = "#000000"
  ): string {
    const isValidHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(value || "");
    return isValidHexColor ? (value as string) : defaultValue;
  }
}
