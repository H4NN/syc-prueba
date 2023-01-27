import React from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Mensaje from "@/components/Mensaje";
import ListadoEstados from "@/components/ListadoEstados";
import { useRouter } from "next/router";

function estados(props) {
  const hayEstados = props.estados != 0;
  const router = useRouter();
  const handleClick = (e) => {
    router.push("/nuevoestado");
  };

  return (
    <Layout>
      <div>
        {hayEstados ? (
          <ListadoEstados estados={props.estados} />
        ) : (
          <>
            <Mensaje
              titulo="Info:"
              detalle="Aun no existen estados de factura"
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
  // Capturo los datos de los estados de factura desde el backend
  const { data: estados } = await axios.get(
    "http://localhost:3000/api/estados"
  );

  return {
    props: {
      estados,
    },
  };
};

export default estados;
