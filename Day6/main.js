const express = require('express')
const app = express()
const port = 3000
const blog=require('./routes/blog')
const shop=require('./routes/shop')

app.use('/blog',blog)
app.use('/shop',shop)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  res.sendFile('./templates/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})