import formatter from "../../src/function/formatter";

describe('🤔formatter.ts', () => {
  test('output', () => {
    expect(formatter('ERROR', 'This is test ERROR')).toBe("[ERROR] This is test ERROR");
    expect(formatter('','')).toBe('[] ');
  });
});