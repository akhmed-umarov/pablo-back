import errorMiddleware from "./middlewares/error-middleware.js";
import cookieParser from "cookie-parser";
import router from "./router/index.js";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT ?? 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    crossDomain: true,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: process.env.CLIENT_URL
  })
);

app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
