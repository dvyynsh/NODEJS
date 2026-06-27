[ npm init ]
= It will create a file called package.json
and in script section = we create own ---
like "start": "node index.js" ---------------------- If we want to run then we type -------- npm run start   



Then we installed this thing By typing below command in terminal.....
[ npm install express ]
Also You can go to their website // Expressjs and see all tutorials in GETTING STARTED section.


--------------------------------------------------------------------
// after copying a code from the wesite this below code
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
----------------------------------------------------------------------
if you run by typing [ npm run start ] 
Then your server will run just type localhost:3000 on browuser


// Also one last thing Enhancing the port from webste called dotenv
1. install [ npm i dotenv ] 
2. Create a file named .env ---- write there PORT=3000
3. In your fisrt folder index.js write [ require('dotenv').config() ]
4. Change app.listen(process.env.PORT. ()=>{

})
5. Now the application is Production ready
