import React from "react";

function TablaReporte(props) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Reporte de Facturaci&oacute;n
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Fecha Factura
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Valor Factura
            </th>
            <th scope="col" className="px-6 py-3">
              Descripci&oacute;n
            </th>
          </tr>
        </thead>
        <tbody>
          {props.resultado_reporte.map((reporte) => (
            <tr
              key={reporte.FECHA_FAC}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {reporte.FECHA_FAC}
              </th>
              <td className="px-6 py-4">{reporte.NOMBRE}</td>
              <td className="px-6 py-4">{reporte.VALOR_FAC}</td>
              <td className="px-6 py-4">{reporte.DESCRIPCION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaReporte;
