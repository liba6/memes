import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import got from 'got';

const url =
  'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300';

const options = {
  json: {
    documentName: 'Quick Start',
  },
};
const readable = fs.createReadStream(url);
//const gotStream = got.stream.post(url, options);

const outStream = fs.createWriteStream('./images.js/01.jpg');

console.log(readable.pipe(outStream));
