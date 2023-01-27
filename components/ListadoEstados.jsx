import React from "react";
import { useRouter } from "next/router";

function ListadoEstados(props) {
  const router = useRouter();
  const handleClick = (e) => {
    router.push("/nuevoestado");
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Estados de Factura
          <button
            onClick={handleClick}
            className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Agregar nuevo
          </button>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              C&oacute;digo
            </th>
            <th scope="col" className="px-6 py-3">
              Descripci&oacute;n
            </th>
          </tr>
        </thead>
        <tbody>
          {props.estados.map((estado) => (
            <tr
              key={estado.CODI_ESTADO}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {estado.CODI_ESTADO}
              </th>
              <td className="px-6 py-4">{estado.DESCRIPCION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoEstados;
