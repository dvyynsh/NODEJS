import connectDb from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env"
});


connectDb()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(` server is running at port : ${process.env.PORT}`)
  })
})
.catch((err) =>{
  console.log("MONGO DB CONNECTION FAILED !!", err)
})  



























// connecting to database and starting server ( that is first approch )






/*
import express from "express";

const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Database Connected");
    app.on("error", (err) => {
      console.error("application unable not able to talk to database", err);
      throw err;
    })

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("Error in DB connection", error);
    throw error;
  }

})()

*/
