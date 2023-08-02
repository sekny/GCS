const Cloud = require('@google-cloud/storage')
const path = require('path')
// Download keys from your Service-Account(https://console.cloud.google.com/iam-admin/serviceaccounts)
// And add it into config, name it keys.json
const serviceKey = path.join(__dirname, './keys.json')

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: serviceKey.project_id,
})

module.exports = storage