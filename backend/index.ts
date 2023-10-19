import express from "express";
import routes from "./src/routes/index";
import cors from "cors";
import morgan from "morgan";

const PORT = 3000;

const app = express();
app.use(express.json());
app.set("env", "development");

// Habilitar CORS para permitir solicitudes desde http://localhost:4000
app.use(cors({ origin: "https://fullstack-test-shawandpartners.vercel.app" }));
app.use(morgan("dev"));

app.use("/api", routes);
app.use("*", (_req, res) => {
  res.status(404).json({ error: "Oops! Not found" });
});

app.listen(PORT, () => {
  console.log("Server raised on port", PORT);
});

export default app;
