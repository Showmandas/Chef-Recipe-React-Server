
const express = require('express')
const app = express()
const cors=require('cors');
const port = process.env.PORT || 5000

const chefdata=require('./data/chefData.json')
app.use(cors())
app.get('/chefData', (req, res) => {
    res.send(chefdata);
  })
app.listen(port, () => {
  console.log(`Chef recipe on port ${port}`)
})