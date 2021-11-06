import { Console } from 'console';

export default class Message extends Console {
  constructor() {
    super({ stdout: process.stdout });
  }
}
