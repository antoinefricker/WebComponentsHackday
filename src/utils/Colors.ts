export class Colors {
  static getContrastColor(hexColor: string): string {
    // Remove the hash symbol if present
    const color = hexColor.replace("#", "");

    // Convert hex to RGB
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for light colors and white for dark colors
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }
}
