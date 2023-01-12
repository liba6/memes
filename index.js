import got from 'got';
import * as cheerio from 'cheerio';
import fs from 'fs';

const site = 'https://memegen-link-examples-upleveled.netlify.app/';
const respond = await got(site);

const body = cheerio.load(respond.body);

const pics = body('img');
const imgSrcs = [];

for (let i = 0; i < 10; i++) {
  imgSrcs.push(pics[i].attribs.src);
}
console.log(imgSrcs, 'all urls');

// //
//const imgAddress = './images.js/01.jpg';
const answer = await got(
  'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300',
);
console.log(answer.headers);
// // for (let j = 0; j < 11; j++) {
// //   const answer = await got(imgSrcs[j]);
// // }
