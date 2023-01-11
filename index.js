import got from 'got';
import * as cheerio from 'cheerio';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';
const response = await got(url);

const body = cheerio.load(response.body);

const pics = body('img');
const imgSrcs = [];

for (let i = 0; i < 10; i++) {
  imgSrcs.push(pics[i].attribs.src);
}
console.log(imgSrcs);
