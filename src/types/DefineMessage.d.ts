export type category = 'error' | 'warn' | 'log' | 'running' | 'complete';

export type textList = {
  id: string,
  text: string | {
    [key:string]: string
  }
}[]

export interface DefineMessage {
  error?: {
    prefix?: string,
    message: textList,
  }
  warn?: {
    prefix?: string,
    message: textList,
  }
  log?: {
    prefix?: string,
    message: textList,
  }
  running?: {
    prefix?: string,
    message: textList,
  }
  complete?: {
    prefix?: string,
    message: textList,
  }
}