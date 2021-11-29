export default function formatter(prefix: string, message: string):string {
  const postFormat = `[${prefix}] ${message}`;
  return postFormat;
}
