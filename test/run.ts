/** E2E testing */
import Speak from '../src/main';
import dictionary from './data/message';
import type { category } from '../src/types/DefineMessage';

// Create instance
const speak = new Speak(dictionary);

// Defining categories
const categoryList:category[] = ['error', 'warn', 'log', 'running', 'complete'];

// run
categoryList.forEach((cat) => {
  console.log(`=[ ${cat} ]=======================`)
  const messageId = `TEST_${cat.toUpperCase()}_MESSAGE`;
  speak[cat](messageId);
});
