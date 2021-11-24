import formatter from './function/formatter';
import getMessage from './function/getMessage';

import type { category, DefineMessage } from './types/DefineMessage';

export default class Speak {
  dictionary: DefineMessage;
  category: category | null;
  readonly output: Console["log"];
  constructor(dictionary?: DefineMessage) {
    this.dictionary = dictionary || {};
    this.output = console.log;
    this.category = null;
  }

  log(messageId: string): void {
    this.category = 'log';
    const data = this.dictionary.log?.message;
    if (data) {
      const text = getMessage(data, messageId);
      this.output(formatter(this.category, text[0]));
    }
  }

  error(messageId: string): void {
    this.category = 'error';
    const data = this.dictionary.error?.message;
    if (data) {
      const text = getMessage(data, messageId);
      this.output(formatter(this.category, text[0]));
    }
  }

  warn(messageId: string): void {
    this.category = 'warn';
    const data = this.dictionary.warn?.message;
    if (data) {
      const text = getMessage(data, messageId);
      this.output(formatter(this.category, text[0]));
    }
  }

  complete(messageId: string): void {
    this.category = 'complete';
    const data = this.dictionary.complete?.message;
    if (data) {
      const text = getMessage(data, messageId);
      this.output(formatter(this.category, text[0]));
    }
  }

  running(messageId: string): void {
    this.category = 'running';
    const data = this.dictionary.running?.message;
    if (data) {
      const text = getMessage(data, messageId);
      this.output(formatter(this.category, text[0]));
    }
  }
}
