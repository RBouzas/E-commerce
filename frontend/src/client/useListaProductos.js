import useFetch from "./useFetch";

const useListaProductos = () => {
  return useFetch({ url: "/api/productos" });
};

export default useListaProductos;
