import React, { useState } from "react";
import ClientesForm from "@/components/ClientesForm";
import axios from "axios";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function NuevoCliente() {
  const router = useRouter();

  // Estado Cliente
  const [cliente, setCliente] = useState({
    nume_doc: "",
    nombre: "",
    direccion: "",
  });

  // State Lifting
  const clienteChangeHandler = (evento) => {
    setCliente({ ...cliente, [evento.name]: evento.value.toUpperCase() });
  };

  // Nuevo cliente
  const handleSubmit = async (evento) => {
    evento.preventDefault(); // prevenir comportamiento por defecto del navegador

    try {
      await axios.post("/api/clientes", cliente);
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
          toast.error(`Cliente con cédula ${cliente.nume_doc} ya existe!`);
          break;
        case 1064:
          toast.error("Error de sintaxis en consulta Sql");
          break;

        default:
          toast.error(
            "Error desconocido al crear el cliente. Codigo de error:\n" +
              codigoError
          );
          break;
      }
    }
  };

  return (
    <Layout>
      <div>
        <ClientesForm
          onClienteChange={clienteChangeHandler}
          onClientSubmit={handleSubmit}
        ></ClientesForm>
      </div>
    </Layout>
  );
}

export default NuevoCliente;
