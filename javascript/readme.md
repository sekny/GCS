### Get Started

- npm install
- npm run start


### Curl for upload

```
curl  -X POST \
  'http://localhost:9001/uploads' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --form 'file=@/Users/htb/Desktop/gstoragetest/assets/pexels-eberhard-grossgasteiger-443446.jpg'
```





### Ref 
- https://googleapis.dev/nodejs/storage/latest/index.html
- https://cloud.google.com/storage/docs/introduction
