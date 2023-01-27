import React from "react";

function ClientesForm(props) {
  const handleSubmit = (evento) => {
    props.onClientSubmit(evento);
  };

  // Maneja cambio de datos en los inputs
  const handleChange = (evento) => {
    props.onClienteChange(evento.target); // State lift
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Nuevo Cliente
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="nume_doc" className="sr-only"></label>
                  <input
                    type="number"
                    name="nume_doc"
                    id="nume_doc"
                    placeholder="N&uacute;mero de documento"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="nombre" className="sr-only"></label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre cliente"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="direccion" className="sr-only"></label>
                  <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    placeholder="Direcci&oacute;n"
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
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

export default ClientesForm;
