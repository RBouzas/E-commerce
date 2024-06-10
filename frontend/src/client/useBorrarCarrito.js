import useFetch from "./useFetch";

const OPTIONS = { method: "DELETE" };

const useBorrarCarrito = (idCarrito) => {
  return useFetch(
    {
      url: `/api/carrito/${idCarrito}`,
      options: OPTIONS,
    },
    false
  );
};

export default useBorrarCarrito;
