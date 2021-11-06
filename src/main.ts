import path from 'path';
import { Console } from 'console';
import readPreset from './function/readPreset';

export default class Message extends Console {
  constructor() {
    super({ stdout: process.stdout });
  }

  /**
   * プリセットとして登録したメッセージを呼び出すメソッド
   * @param messageId 呼び出すメッセージのID
   */
  preset(messageId: string){
    readPreset(path.join(__dirname, '..', '..', 'static', 'messages.json'));
  }
}
