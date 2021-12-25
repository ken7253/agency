import type { ConsoleColor, ConsoleBackground, ConsoleStyle } from "../types/ConsoleStyle";

/**
 * Class for decorating the console.
 * @todo add this.backgroundColor = 'none'
 * @todo this.bold [option]
 */
export default class Paint {
  /** Control character to change text color. */
  readonly textColor: ConsoleColor = {
    black: '\u001b[30m',
    red: '\u001b[31m',
    green: '\u001b[32m',
    yellow: '\u001b[33m',
    blue: '\u001b[34m',
    magenta: '\u001b[35m',
    cyan: '\u001b[36m',
    white: '\u001b[37m',
  };

  /** Control characters to change the background color. */
  readonly backgroundColor: ConsoleBackground = {
    black: '\u001b[40m',
    red: '\u001b[41m',
    green: '\u001b[42m',
    yellow: '\u001b[43m',
    blue: '\u001b[44m',
    magenta: '\u001b[45m',
    cyan: '\u001b[46m',
    white: '\u001b[47m',
    none: '',
  };

  /** Control character to reset the style. */
  readonly reset: string = '\u001b[0m';

  /** Compatibility with older consoles. */
  compatibility: boolean;
  constructor(compatibility = false) {
    this.compatibility = compatibility;
  }

  /**
   * Method to return with control characters for style.
   * @param text Character string to display.
   * @param style Style definitions to apply.
   * @returns string with control characters for style.
   */
  paint(text:string, style:ConsoleStyle):string {
    const currentStyle = {
      color: this.textColor[style.color],
      background: this.backgroundColor[style.background],
      bold: style.bold ? '\u001b[1m' : '',
    }
    const postPaint = `${Object.values(currentStyle).join('')}${text}${this.reset}`;

    return postPaint;
  }
}
