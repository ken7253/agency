import { Console } from 'console';
import { category, DefineMessage} from './types/DefineMessage';
import formatter from './function/formatter';
import getMessage from './function/fetchMessage';

export default class Speak extends Console {
  dictionary: DefineMessage;
  constructor(dictionary?: DefineMessage) {
    super({ stdout: process.stdout });
    this.dictionary = dictionary || {};
  }

  /**
   * プリセットとして登録したメッセージを呼び出すメソッド
   * @param messageId 呼び出すメッセージのID
   */
  preset(category: category, messageId: string):void {
    const data = this.dictionary[category];
    if(data) {
      const text = getMessage(data.message, messageId);
      process.stdout.write(formatter(category, text[0]));
    }
  }
}
