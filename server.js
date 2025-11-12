        // Importamos las librerías
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Configuramos variables del entorno
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
// Creamos la aplicación de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

import juegoRoutes from "./routes/juegoRoutes.js";
app.use("/api/juegos", juegoRoutes);

// Rutas de prueba
app.get("/", (req, res) => {
  res.send("🎮 Bienvenida a GameTracker Backend");
});

// Conexión con MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(5000, () => console.log("🚀 Servidor corriendo en puerto 5000"));
  })
  .catch((error) => console.error("❌ Error al conectar:", error));
