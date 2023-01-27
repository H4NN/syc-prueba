import React, { useState } from "react";

function FacturasForm(props) {
  const [numDocumento, setNumDocumento] = useState("");

  const handleSubmit = (evento) => {
    props.onFacturaSubmit(evento);
  };

  // Maneja cambio de datos en los inputs
  const handleChange = (evento) => {
    if (evento.target.name == "nume_doc") {
      evento.target.value == ""
        ? setNumDocumento("")
        : setNumDocumento(evento.target.value);
    }
    props.onFacturaChange(evento.target); // State lift
  };

  return (
    <>
      <div className="container mx-auto">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 pt-12">
          Registro de Factura
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-6">
            {/* --- id factura --- */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-1">
              <label
                htmlFor="id_factura"
                className="block text-sm font-medium text-gray-700"
              >
                Id Factura
              </label>
              <input
                type="number"
                name="id_factura"
                id="id_factura"
                autoComplete="address-level2"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
                onChange={handleChange}
              />
            </div>
            {/* --- id factura --- */}

            {/* --- cliente --- */}
            <div className="col-span-9 sm:col-span-9 lg:col-span-9">
              <label
                htmlFor="nume_doc"
                className="block text-sm font-medium text-gray-700"
              >
                Cliente
              </label>
              <select
                name="nume_doc"
                id="nume_doc"
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-1 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={handleChange}
                required
              >
                <option value={""}>Seleccione un cliente por favor...</option>
                {props.clientes.map((cliente) => (
                  <option key={cliente.NUME_DOC} value={cliente.NUME_DOC}>
                    {cliente.NOMBRE}
                  </option>
                ))}
              </select>
            </div>
            {/* --- cliente --- */}

            {/* --- documento --- */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Documento
              </label>
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                value={numDocumento}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 bg-clip-padding shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                readOnly
                onChange={handleChange}
              />
            </div>
            {/* --- documento --- */}
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* --- codigo de estado --- */}
            <div className="col-span-3 sm:col-span-3 lg:col-span-3">
              <label
                htmlFor="codi_estado"
                className="block text-sm font-medium text-gray-700"
              >
                C&oacute;digo de estado
              </label>
              <select
                name="codi_estado"
                id="codi_estado"
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out mt-1 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={handleChange}
                required
              >
                <option value={""}>Seleccione un estado por favor...</option>
                {props.estados.map((estado) => (
                  <option key={estado.CODI_ESTADO} value={estado.CODI_ESTADO}>
                    {estado.DESCRIPCION}
                  </option>
                ))}
              </select>
            </div>
            {/* --- codigo de estado --- */}
            {/* --- valor factura --- */}
            <div className="col-span-9 sm:col-span-9 lg:col-span-9">
              <label
                htmlFor="valor_fac"
                className="block text-sm font-medium text-gray-700"
              >
                Valor Factura
              </label>
              <input
                type="number"
                name="valor_fac"
                id="valor_fac"
                autoComplete="address-level2"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleChange}
                required
              />
            </div>
            {/* --- valor factura --- */}
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Crear
          </button>
        </form>
      </div>
    </>
  );
}

export default FacturasForm;
