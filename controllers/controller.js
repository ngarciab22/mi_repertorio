import path from "path";
import { addSongQueries, songsRegistersQueries, updateSongQueries, deleteSongQueries } from "../models/queries.js";

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
}

//Agregar canción
export const addSong = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const response = await addSongQueries({ titulo, artista, tono });
    res.send(response);
}

//Mostrar registro de canciones
export const songsRegisters = async (req, res) => {
    const response = await songsRegistersQueries();
    res.send(response);
}

//Editar registro
export const updateSong = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const { id } = req.params
    const response = await updateSongQueries(titulo, artista, tono, id);
    res.send(response);
}

//Eliminar registro
export const deleteSong = async (req, res) => {
    const { id } = req.query;
    const response = await deleteSongQueries(id);
    res.send(response);
}