
const express = require('express')
const app = express()
const cors=require('cors');
const port = process.env.PORT || 5000

const chefdata=require('./data/chefData.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Chef site is running')
})
app.get('/chefData', (req, res) => {
    res.send(chefdata);
  })

app.get('/chefData/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  console.log(id);
  let selectedData=chefdata.find(data=>parseInt(data.id) === id);
  console.log(selectedData);
  res.send(selectedData);
})
app.listen(port, () => {
  console.log(`Chef recipe on port ${port}`)
})