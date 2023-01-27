// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "@/config/database.js";

const generarReporte = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "SELECT f.FECHA_FAC, c.NOMBRE, sum(f.VALOR_FAC) as VALOR_FAC, e.DESCRIPCION FROM factura f, clientes c, estados_factura e WHERE  f.NUME_DOC=c.NUME_DOC and f.CODI_ESTADO=e.CODI_ESTADO GROUP BY c.NOMBRE, e.DESCRIPCION"
    );
    return res.status(200).json(resultado);
  } catch (error) {
    // Devuelvo el objeto error al frontend
    return res.status(500).json({ error });
  }
};

const crearFactura = async (req, res) => {
  try {
    const { id_factura, nume_doc, codi_estado, valor_fac, fecha_fac } =
      req.body;

    const resultado = await pool.query("INSERT INTO factura SET ?", {
      ID_FACTURA: id_factura,
      NUME_DOC: nume_doc,
      CODI_ESTADO: codi_estado,
      VALOR_FAC: valor_fac,
      FECHA_FAC: fecha_fac,
    });

    return res
      .status(200)
      .json({ id_factura, nume_doc, codi_estado, valor_fac, fecha_fac });
  } catch (error) {
    // Devuelvo el objeto error al frontend
    return res.status(500).json({ error });
  }
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await crearFactura(req, res);

    case "GET":
      return await generarReporte(req, res);

    default:
      break;
  }
}
