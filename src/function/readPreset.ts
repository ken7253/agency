import fs from 'fs';

export default function readPreset(filePath: string):JSON {
  const preset = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });

  return JSON.parse(preset) as JSON;
}
