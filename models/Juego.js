import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  plataforma: {
    type: String,
    required: true,
  },
  calificacion: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
});

const Juego = mongoose.model("Juego", juegoSchema);
export default Juego;
