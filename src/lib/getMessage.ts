import type { textList } from '../types/DefineMessage';

export default function getMessage(
  data: textList,
  messageId: string,
  lang = 'en'
) {
  const result = data.map((value) => {
    const isMatch = () => value.id === messageId;
    if (isMatch() && typeof value.text === 'string') {
      return value.text;
    } else if (isMatch() && typeof value.text === 'object') {
      return value.text[lang];
    } else {
      return '';
    }
  });

  return result[0];
}
