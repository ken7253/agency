import type { DefineMessage } from '../../src/types/DefineMessage';

const dictionary: DefineMessage = {
  error: {
    prefix: 'Error',
    message: [
      {
        id: 'TEST_ERROR_MESSAGE',
        text: 'This is a test error message.',
      },
    ],
  },

  log: {
    prefix: 'Log',
    message: [
      {
        id: 'TEST_LOG_MESSAGE',
        text: {
          en: 'This is a test log message.',
          ja: 'これはテスト用ログメッセージです。',
        },
      },
    ],
  },

  complete: {
    message: [
      {
        id: 'TEST_COMPLETE_MESSAGE',
        text: 'This is a test complete message.'
      }
    ]
  },

  running: {
    message: [
      {
        id: 'TEST_RUNNING_MESSAGE',
        text: 'This is a test running message.'
      }
    ]
  },

  warn: {
    message: [
      {
        id: 'TEST_WARN_MESSAGE',
        text: 'This is a test warn message.'
      }
    ]
  }
};

export default dictionary;
