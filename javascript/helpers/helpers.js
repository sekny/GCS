const util = require('util')
// const gc = require('./config/')
const gc = require('../config/')
const bucket = gc.bucket('k01-dev') // temparory-bucket: realthytemp

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file

  const blob = bucket.file(originalname.replace(/ /g, "_"))
  const blobStream = blob.createWriteStream({
    resumable: false
  })
  blobStream.on('finish', () => {
    const publicUrl = util.format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    )
    resolve(publicUrl)
  })
  .on('error', (err) => {
    reject(`Unable to upload image, something went wrong`);
	console.log(err);
  })
  .end(buffer)
})

const listBucket = () => new Promise((resolve, reject) => {
	const [buckets] = gc.storage.getBuckets();
	
	resolve(buckets)
	// console.log('Buckets:');
	// buckets.forEach(bucket => {
	// 	console.log(bucket.name);
	// });
})

module.exports = {
	uploadImage,
	listBucket
}