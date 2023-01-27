// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "@/config/database.js";

const traerEstados = async (req, res) => {
  try {
    const [resultado] = await pool.query("SELECT * FROM estados_factura");
    return res.status(200).json(resultado);
  } catch (error) {
    // Devuelvo el objeto error al frontend
    return res.status(500).json({ error });
  }
};

const crearEstado = async (req, res) => {
  try {
    const { codi_estado, descripcion } = req.body;

    const resultado = await pool.query("INSERT INTO estados_factura SET ?", {
      CODI_ESTADO: codi_estado,
      DESCRIPCION: descripcion,
    });

    return res.status(200).json({ codi_estado, descripcion });
  } catch (error) {
    // Devuelvo el objeto error al frontend
    return res.status(500).json({ error });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await crearEstado(req, res);

    case "GET":
      return await traerEstados(req, res);

    default:
      break;
  }
}
