import React from "react";

function EstadosForm(props) {
  const handleSubmit = (evento) => {
    props.onEstadoSubmit(evento);
  };

  // Maneja cambio de datos en los inputs
  const handleChange = (evento) => {
    props.onEstadoChange(evento.target); // State lift
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Nuevo Estado de Factura
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="codi_estado" className="sr-only"></label>
                  <input
                    type="number"
                    name="codi_estado"
                    id="codi_estado"
                    placeholder="C&oacute;digo de estado"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="descripcion" className="sr-only"></label>
                  <input
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripci&oacute;n"
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EstadosForm;
