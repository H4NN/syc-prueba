// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "@/config/database.js";

const traerClientes = async (req, res) => {
  const [resultado] = await pool.query("SELECT * FROM clientes");
  return res.status(200).json(resultado);
};

const crearCliente = async (req, res) => {
  try {
    const { nume_doc, nombre, direccion } = req.body;

    const resultado = await pool.query("INSERT INTO clientes SET ?", {
      NUME_DOC: nume_doc,
      NOMBRE: nombre,
      DIRECCION: direccion,
    });

    return res.status(200).json({ nume_doc, nombre, direccion });
  } catch (error) {
    // Devuelvo el objeto error al frontend
    return res.status(500).json({ error });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await crearCliente(req, res);

    case "GET":
      return await traerClientes(req, res);

    default:
      break;
  }
}
