import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({                           // as cors error was there in prev chapter
  origin: process.env.CORS_ORIGIN,       // we are using this so that browser allows
  credentials: true                      // we can access user cookie
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export { app }