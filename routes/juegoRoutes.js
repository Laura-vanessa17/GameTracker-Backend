import express from "express";
import Juego from "../models/Juego.js";

const router = express.Router();

// Obtener todos los juegos
router.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
});

// Agregar un nuevo juego
router.post("/", async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    await nuevoJuego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    console.error("Error en el backend:", error);
    res.status(400).json({ error: "Error al guardar el juego" });
  }
});

// 🔥 ELIMINAR un juego (PEGA ESTO)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const juegoEliminado = await Juego.findByIdAndDelete(id);

    if (!juegoEliminado) {
      return res.status(404).json({ mensaje: "Juego no encontrado" });
    }

    res.json({ mensaje: "Juego eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el juego", error });
  }
});

export default router;
