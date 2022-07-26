const express = require('express') // express 모듈을 가져옴
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aalsgur:rkdals!234@boilerplate.nrj9o.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})