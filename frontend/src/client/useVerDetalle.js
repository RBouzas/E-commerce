import useFetch from "./useFetch";

const OPTIONS = { method: "GET" };

const useVerDetalle = (idCarrito) => {
  return useFetch({
    url: `/api/productos/${idCarrito}`,
    options: OPTIONS,
  });
};

export default useVerDetalle;
