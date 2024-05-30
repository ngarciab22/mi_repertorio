import pool from '../config/config.js';

//Agregar canción
export const addSongQueries = async ({ titulo, artista, tono }) => {
    try {
        const sql = {
            text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) returning *",
            values: [titulo, artista, tono]
        }
        const response = await pool.query(sql);
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No se agrego la canción")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }

}

//Mostrar registro de canciones
export const songsRegistersQueries = async () => {
    try {
        const sql = {
            text: "SELECT * FROM canciones",
        }
        const response = await pool.query(sql)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No existen registros")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}

//Editar registro de canción
export const updateSongQueries = async ( titulo, artista, tono, id ) => {
    try {
        const sql = {
            text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 returning *",
            values: [titulo, artista, tono, id]
        }
        const response = await pool.query(sql)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No se actualizo la canción")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}

//Eliminar registro
export const deleteSongQueries = async (id) => {
    try {
        const sql = {
            text: "DELETE FROM canciones WHERE id = $1 returning *",
            values: [id],
        }
        const response = await pool.query(sql)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error("No se elimino la canción")
        }
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}