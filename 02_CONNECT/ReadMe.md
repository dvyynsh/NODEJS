## 📌 Goal
Learn how to connect a React Frontend with an Express Backend.

# 🏗 Project Structure

02_CONNECT/
│
├── Backend/
│      server.js
│
├── Frontend/
│      React + Vite
│
└── ReadMe.md

## 📦 Packages Installed
Backend - express
Frontend - axios

# Axios // Just To use Axios instead of fetch() you can use fetch too.
## unlike fetch (axios automatically converts JSON into JavaScript Objects)
Install bash = npm install axios
Import `` import axios from "axios" ``

## ⚠️ Problems Encountered
  1. CORS Error
  **Reason**
  - Frontend (`localhost:5173`) and Backend (`localhost:3000`) were running on different origins.

  **Solution**
  - Added Vite Proxy in `vite.config.js`.

