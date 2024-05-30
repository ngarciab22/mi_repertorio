import express from "express";
import { home, addSong, songsRegisters, updateSong, deleteSong } from "../controllers/controller.js";

const router = express.Router()

//rutas
router.get("/", home)
router.post("/cancion", addSong)
router.get("/canciones", songsRegisters)
router.put("/cancion/:id", updateSong)
router.delete("/cancion", deleteSong)

export default router;