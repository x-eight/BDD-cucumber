import express from "express";
import { userApi } from "./routes";

async function test() {
  try {
    const app = express();
    //app.use(express.json({ limit: "10mb" }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/v1", userApi());

    app.listen(3000, () => {
      console.log("server 3000");
    });
  } catch (error) {
    console.error("Unable to start the server: ", error);
  }
}

test();
