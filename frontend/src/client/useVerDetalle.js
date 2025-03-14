import useFetch from "./useFetch";

const OPTIONS = { method: "GET" };

const useVerDetalle = (idProducto) => {
  return useFetch({
    url: `/api/productos/${idProducto}`,
    options: OPTIONS,
  });
};

export default useVerDetalle;
