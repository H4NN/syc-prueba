import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

import FacturasForm from "@/components/FacturasForm";
import Mensaje from "@/components/Mensaje";
import Layout from "@/components/Layout";

function Registro(props) {
  const existenClientes = props.clientes != 0;
  const existenEstados = props.estados != 0;

  const router = useRouter();

  // Estado Cliente
  const [factura, setFactura] = useState({
    id_factura: "",
    nume_doc: "",
    codi_estado: "",
    valor_fac: "",
    fecha_fac: "",
  });

  // State Lifting
  const facturaChangeHandler = (evento) => {
    // Comprobar si hubo un cambio en la factura
    const fecha = new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/-/g, "-")
      .replace("T", " ");
    setFactura({
      ...factura,
      [evento.name]: evento.value.toUpperCase(),
      fecha_fac: fecha,
    });
  };

  // Nueva factura
  const handleSubmit = async (evento) => {
    try {
      evento.preventDefault(); // prevenir comportamiento por defecto del navegador
      await axios.post("/api/facturas", factura);
      router.push("/");
    } catch (error) {
      // Codigos de error posibles:
      // error.errno == 1146 y  error.code == 'ER_NO_SUCH_TABLE' > La tabla no existe
      // error.errno == 1062 y error.code == 'ER_DUP_ENTRY' > CLIENTE YA EXISTE CON DICHA CEDULA
      // error.errno == 1064 y error.code == 'ER_PARSE_ERROR' > ERROR DE SINTAXIS EN LA CONSULTA SQL

      const codigoError = error.response.data.error.errno;

      switch (codigoError) {
        case 1146:
          toast.error("Tabla no existe");
          break;
        case 1062:
          toast.error(
            `Registro con Id de factura ${factura.id_factura} ya existe!`
          );
          break;
        case 1064:
          toast.error("Error de sintaxis en consulta Sql");
          break;

        default:
          toast.error(
            "Error desconocido al crear el registro. Codigo de error:\n" +
              codigoError
          );
          break;
      }
    }
  };

  return (
    <Layout>
      <div>
        {existenClientes && existenEstados ? (
          <FacturasForm
            clientes={props.clientes}
            estados={props.estados}
            onFacturaChange={facturaChangeHandler}
            onFacturaSubmit={handleSubmit}
          ></FacturasForm>
        ) : (
          <>
            <Mensaje
              titulo="Error:"
              detalle="No se detectan Clientes o Estados de Factura, por favor crearlos antes de registrar facturaci&oacute;n"
            />
            <Link
              href={"/clientes"}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-3"
            >
              Ir agregar clientes
            </Link>
            <Link
              href={"/estados"}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Ir agregar estados de factura
            </Link>
          </>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: clientes } = await axios.get(
    "http://localhost:3000/api/clientes"
  );

  const { data: estados } = await axios.get(
    "http://localhost:3000/api/estados"
  );

  return {
    props: {
      clientes,
      estados,
    },
  };
};

export default Registro;
