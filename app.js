const express = require('express')
const app = express()
const port = 3000
const publicIp = require('public-ip');

app.get('/', (req, res) => {
    res.send('Hello There from anywhere, everywhere all at once')
  })

app.listen(port, () => {
  publicIp.v4().then(ip => {
    console.log(`Example app listening at ${ip}:${port}`);
  }).catch(err => {
    console.log(`Example app listening at ${ip}:${err}}`);
  });
});