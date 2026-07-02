import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/jokes': 'http://localhost:3000'       
      // "/jokes = name should be same as in Backend server.js file and used in App.jsx
    }
  },
  // added proxy to avoid CORS error, now Browser will see req is comming from same origin. As, the problem was that Browser was seeing req is comming from different origin, so it was blocking the request. Now, Browser will see req is comming from same origin, so it will allow the request to go through.
  plugins: [react()],
})
