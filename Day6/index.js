const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const users=require('./MOCK_DATA.json')
app.use(express.urlencoded({ extended: true }));

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
app.post('/api/users', (req, res) => {
  const body=req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      res.send('POST request to the homepage')
    } else {
      res.status(201).json(body);
    }
  });
  

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})