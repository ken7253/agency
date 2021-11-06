export interface ConsoleColor {
  black: '\u001b[30m';
  red: '\u001b[31m';
  green: '\u001b[32m';
  yellow: '\u001b[33m';
  blue: '\u001b[34m';
  magenta: '\u001b[35m';
  cyan: '\u001b[36m';
  white: '\u001b[37m';
}

export interface ConsoleBackground {
  black: '\u001b[40m';
  red: '\u001b[41m';
  green: '\u001b[42m';
  yellow: '\u001b[43m';
  blue: '\u001b[44m';
  magenta: '\u001b[45m';
  cyan: '\u001b[46m';
  white: '\u001b[47m';
}

export interface ConsoleStyle {
  color: keyof ConsoleColor;
  background: keyof ConsoleBackground;
  bold: boolean;
}