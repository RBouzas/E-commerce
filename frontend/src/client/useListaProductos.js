import useFetch from "./useFetch";

const useListaProductos = () => {
  return useFetch("/api/productos");
};

export default useListaProductos;
