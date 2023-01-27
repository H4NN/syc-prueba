import React from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Mensaje from "@/components/Mensaje";
import TablaReporte from "@/components/TablaReporte";

function reporte(props) {
  const existeReporte = props.resultado_reporte != 0;
  return (
    <Layout>
      <div>
        {existeReporte ? (
          <TablaReporte resultado_reporte={props.resultado_reporte} />
        ) : (
          <Mensaje
            titulo="Info:"
            detalle="No se encuentran datos para generar reporte"
          />
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  // Capturo los datos de reporte desde el backend
  const { data: resultado_reporte } = await axios.get(
    "http://localhost:3000/api/facturas"
  );

  return {
    props: {
      resultado_reporte,
    },
  };
};

export default reporte;
