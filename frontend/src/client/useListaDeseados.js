import useFetch from "./useFetch";

const useListaDeseados = () => {
  return useFetch({ url: "/api/deseados/productos" });
};

export default useListaDeseados;
