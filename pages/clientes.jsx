import React from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Mensaje from "@/components/Mensaje";
import ListadoClientes from "@/components/ListadoClientes";
import { useRouter } from "next/router";

function clientes(props) {
  const hayClientes = props.clientes != 0;
  const router = useRouter();
  const handleClick = (e) => {
    router.push("/nuevocliente");
  };

  return (
    <Layout>
      <div>
        {hayClientes ? (
          <ListadoClientes clientes={props.clientes} />
        ) : (
          <>
            <Mensaje
              titulo="Info:"
              detalle="Aun no existen clientes en la base de datos"
            />
            <button
              onClick={handleClick}
              className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Agregar nuevo
            </button>
          </>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  // Capturo los datos de los clientes desde el backend
  const { data: clientes } = await axios.get(
    "http://localhost:3000/api/clientes"
  );

  return {
    props: {
      clientes,
    },
  };
};

export default clientes;
