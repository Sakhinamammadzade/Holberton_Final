require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/User");
const { connectToDB } = require("./database/db");

// server init
const server = express();

// database connection
connectToDB();

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

// routeMiddleware
server.use("/auth", authRoutes);
server.use("/users", userRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "running" });
});

server.listen(8000, () => {
  console.log("server [STARTED] ~ http://localhost:8000");
});
