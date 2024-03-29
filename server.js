//import express
import express from "express";

// import router
import Router from "./routes/routes.js";

// init express
const app = express();

// Use Router
app.use(Router);

// listen on port
app.listen(8080, () => console.log('Server Running at http://localhost:8080'));