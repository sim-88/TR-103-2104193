const express = require('express')
const app = express()
const port = 3000
const users=require('./MOCK_DATA.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/blog/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})
app.get('/users', (req, res) => {
  const html=`
  <ul>
    ${users.map((user) => 
      `<li>
        ${user.first_name}
      </li>`
    
    ).join("")}
  </ul>`;
  res.send(html)
})
app.get('/about', (req, res) => {
  res.send("About Us")
})
app.get('/api/users', (req, res) => {
  res.json(users)
})

// Dynamic Path Parameters
app.get('/api/users/:id', (req, res) => {
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    res.json(user);
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})