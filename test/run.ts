/** E2E testing */
import Speak from '../src/main';
import dictionary from './data/message';

const speak = new Speak(dictionary);

speak.log("TEST_LOG_MESSAGE");
speak.error("TEST_ERROR_MESSAGE");