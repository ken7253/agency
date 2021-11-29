import formatter from './lib/formatter';
import getMessage from './lib/getMessage';

import type { category, DefineMessage } from './types/DefineMessage';

export default class Speak {
  dictionary: DefineMessage;
  category: category | null;
  readonly output: Console['log'];

  constructor(dictionary?: DefineMessage) {
    this.dictionary = dictionary || {};
    this.output = console.log;
    this.category = null;
  }

  private display(cat: category, messageId: string): void {
    this.category = cat;
    const data = this.dictionary[cat]?.message;
    if (data) {
      const text = getMessage(data, messageId);
      this.output(formatter(this.category, text[0]));
    }
  }

  log(messageId: string): void {
    this.display('log', messageId);
  }

  error(messageId: string): void {
    this.display('error', messageId);
  }

  warn(messageId: string): void {
    this.display('warn', messageId);
  }

  complete(messageId: string): void {
    this.display('complete', messageId);
  }

  running(messageId: string): void {
    this.display('running', messageId);
  }
}
