// import get from 'get';
import fs from 'fs';
import client from 'https';

const address =
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png';
const file = './images/01.jpg';

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        res
          .pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(
          new Error(`Request Failed With a Status Code: ${res.statusCode}`),
        );
      }
    });
  });
}
console.log(file);
console.log(address);
downloadImage(address, file).then(console.log).catch(console.error);
//console.log(await downloadImage(address, file));
// const dl = new get({

// });

// console.log(dl);
// import fs from 'fs';
// import https from 'https';

// function downloadImage(url, filepath) {
//   client.get(url, (res) => {
//     res.pipe(fs.createWriteStream(filepath));
//   });
// }

// console.log(
//   downloadImage(
//     'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300',
//     './images/01.jpg',
//   ),
// );

// fs.readFile(
//   'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300',
//   (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   },
// );

// const imgAddress = './images.js/01.jpg';
// const answer = await got(
//   'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300',
// );
// console.log(answer.body);

// // // for (let j = 0; j < 11; j++) {
// // //   const answer = await got(imgSrcs[j]);
// // // }

// function downloadImage(url, filepath) {
//       https.get(url, (res) => {
//         const dir
//       if (res.statusCode === 200) {
//         res
//           .pipe(fs.createWriteStream(filepath))
//           .on('error', reject)
//           .once('close', () => resolve(filepath));
//       } else {
//         // Consume response data to free up memory
//         res.resume();
//         reject(
//           new Error(`Request Failed With a Status Code: ${res.statusCode}`),
//         );
//       }
//     });
//   });
// }
//console.log(downloadImage(firstImg, './images/01.jpg'));
//console.log(firstImg);
//console.log(imgSrcs);
//console.log(imgSrcs, 'all urls');
