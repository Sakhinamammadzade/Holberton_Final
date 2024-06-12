require("dotenv").config();
const express = require("express");
const cors = require("cors");

// server init
const server = express();

// middlewares
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["X-Total-Count"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
server.use(express.json());
server.use(cookieParser());


server.get("/", (req, res) => {
  res.status(200).json({ message: "running" });
});

server.listen(8000, () => {
  console.log("server [STARTED] ~ http://localhost:8000");
});
