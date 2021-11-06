import { textList } from '../types/DefineMessage';

export default function getMessage(
  data: textList,
  messageId: string,
  defaultLang = 'en'
): string[] {
  const result: string[] = [];

  data.forEach((v) => {
    const isMatch = () => v.id === messageId;
    if (typeof v.text === 'string' && isMatch) {
      result.push(v.text);
    } else if (typeof v.text === 'object' && isMatch) {
      result.push(v.text[defaultLang]);
    }
  });

  return result;
}
