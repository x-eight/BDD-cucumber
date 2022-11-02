import express from "express";
import { userApi } from "./routes";
import { config } from "./config";

async function test() {
  try {
    const app = express();
    //app.use(express.json({ limit: "10mb" }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/v1", userApi());

    app.listen(config.port, () => {
      console.log(`Server runnning at port ${config.port}`);
    });
  } catch (error) {
    console.error("Unable to start the server: ", error);
  }
}

test();
