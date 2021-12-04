import type { ConsoleStyle } from '../types/ConsoleStyle';
import type { category } from '../types/DefineMessage';

const defaultStyle: {
  [key in category]: ConsoleStyle;
} = {
  error: {
    color: 'red',
    background: 'black',
    bold: false,
  },
  warn: {
    color: 'yellow',
    background: 'black',
    bold: false,
  },
  log: {
    color: 'white',
    background: 'black',
    bold: false,
  },
  complete: {
    color: 'green',
    background: 'black',
    bold: false,
  },
  running: {
    color: 'cyan',
    background: 'black',
    bold: false,
  },
};

export default defaultStyle;
