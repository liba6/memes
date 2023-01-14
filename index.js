import got from 'got';
import * as cheerio from 'cheerio';
import fs from 'node:fs';
import client from 'node:https';

const site = 'https://memegen-link-examples-upleveled.netlify.app/';
const respond = await got(site);

const body = cheerio.load(respond.body);

const pics = body('img');
const imgSrcs = [];

for (let i = 0; i < 10; i++) {
  imgSrcs.push(pics[i].attribs.src);
}
//console.log(imgSrcs);
// push every element in imgSrcs array to its own file

for (let j = 0; j < imgSrcs.length; j++) {
  client.get(imgSrcs[j], (res) => {
    if (j === 9) {
      res.pipe(fs.createWriteStream(`./memes/${j + 1}.jpg`));
    }
    const dir = `./memes/0${j + 1}.jpg`;
    res.pipe(fs.createWriteStream(dir));
  });
}
