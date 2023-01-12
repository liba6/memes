import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import got from 'got';

const url = 'https://httpbin.org/anything';

const options = {
  json: {
    documentName: 'Quick Start',
  },
};

const gotStream = got.stream.post(url, options);

const outStream = fs.createWriteStream('anything.json');

try {
  await pipeline(gotStream, outStream);
} catch (error) {
  console.error(error);
}
