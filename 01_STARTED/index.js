// Just Copied code from the expressjs website
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Lets Write Something Here By looking above example 
app.get('/twitter',(req, res)=>{
  res.send('hiteshdotcom')
})

// Don't Forget '/' It Must
app.get('/login',(req, res)=>{
  res.send('<h1> Please Login At First Server </h1>')
})
// But when you go and cheack in localhost:3000
// It says cannot get ./login details So close and restart the server


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// With this Now app Will Listen and actually the server is running