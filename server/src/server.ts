import express from "express";

const app = express();

app.get('/', (req,res) => {
  res.json({ message: 'Hello friend :3'})
})

app.get('/users', (req,res) => {
  res.send("Hello to all our friends :3")
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})