import express from 'express'; 
// But it will raise an error to overcome ----- add "type": "module" in package.json

const app = express();

app.get('/',(req, res)=>{
  res.send('Server is Ready');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Server at http://localhost:${port}`);
});