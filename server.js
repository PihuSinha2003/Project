const express = require('express');
const app = express();

const taskRouter = require("./routes/taskRouter");
const userRouter = require("./routes/userRouter");

const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD} = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const mongoose = require("mongoose");
  
mongoose.connect(
    MONGO_URL)  
    // "mongodb://root:root@mongo:27017/?authSource=admin")
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error trying to connect MongoDB :",e);
    });

// Middleware for parsing JSON (if needed in future)
app.use(express.json());

app.get('/', (req, res) => {
  res.send("<h1>Hello world using Express and docker compose!!</h1>");
});

app.use("/api/v1/tasks",taskRouter);

const PORT = process.env.PORT || 3000;

// Start the server and handle any potential errors
app.listen(PORT, (err) => {
    console.log(`Server running at http://localhost:${PORT}`);
});
