import data from '../data/message';
import getMessage from '../../src/lib/getMessage';

describe('🤔getMessage.ts', () => {
  test('Single lang', () => {
    const message = data.error.message;
    expect(getMessage(message, 'TEST_ERROR_MESSAGE')).toStrictEqual("This is a test error message.");
  });
  test('Multi lang:default', () => {
    const message = data.log.message;
    expect(getMessage(message, 'TEST_LOG_MESSAGE')).toStrictEqual("This is a test log message.");
  });
  test('Multi lang:exception', () => {
    const message = data.log.message;
    expect(getMessage(message, 'TEST_LOG_MESSAGE', 'ja')).toStrictEqual("これはテスト用ログメッセージです。");
  });
});