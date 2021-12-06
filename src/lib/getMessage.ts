import type { textList } from '../types/DefineMessage';

/**
 *
 * @param data Dictionary data
 * @param messageId Search message ID
 * @param lang require iso-639-1 code
 * @returns
 */
export default function getMessage(
  data: textList,
  messageId: string,
  /** @todo add langrage type check */
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
