import Paint from "../../src/lib/Paint";

const paint = new Paint();

describe('🤔Paint.ts', () => {
  test('paint Method', () => {
    expect(paint.paint('test message', {
      color: 'black',
      background: 'blue',
      bold: false
    })).toBe('\u001b[30m\u001b[44mtest message\u001b[0m');
  });
});