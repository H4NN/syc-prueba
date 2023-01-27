import React, { useState } from "react";
import EstadosForm from "@/components/EstadosForm";
import axios from "axios";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function NuevoEstado() {
  const router = useRouter();

  // State Estados de factura
  const [estadoFactura, setEstadoFactura] = useState({
    codi_estado: "",
    descripcion: "",
  });

  // State Lifting
  const estadoChangeHandler = (evento) => {
    setEstadoFactura({
      ...estadoFactura,
      [evento.name]: evento.value.toUpperCase(),
    });
  };

  // Nuevo estado de factura
  const handleSubmit = async (evento) => {
    evento.preventDefault(); // prevenir comportamiento por defecto del navegador
    try {
      const respuesta = await axios.post("/api/estados", estadoFactura);
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
            `Estado con código ${estadoFactura.codi_estado} ya existe!`
          );
          break;
        case 1064:
          toast.error("Error de sintaxis en consulta Sql");
          break;

        default:
          toast.error(
            "Error desconocido al crear el estado. Codigo de error:\n" +
              codigoError
          );
          break;
      }
    }
  };

  return (
    <Layout>
      <div>
        <EstadosForm
          onEstadoChange={estadoChangeHandler}
          onEstadoSubmit={handleSubmit}
        ></EstadosForm>
      </div>
    </Layout>
  );
}

export default NuevoEstado;
