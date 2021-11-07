import { ConsoleColor,ConsoleBackground,ConsoleStyle } from "../types/ConsoleStyle";

export default class Paint {
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

  readonly backgroundColor: ConsoleBackground = {
    black: '\u001b[40m',
    red: '\u001b[41m',
    green: '\u001b[42m',
    yellow: '\u001b[43m',
    blue: '\u001b[44m',
    magenta: '\u001b[45m',
    cyan: '\u001b[46m',
    white: '\u001b[47m',
  };

  compatibility: boolean;
  constructor(compatibility = false) {
    this.compatibility = compatibility;
  }

  paint(text:string, style?:ConsoleStyle):string {
    const postPaint = `${text}`;

    return postPaint;
  }
}
