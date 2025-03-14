import useFetch from "./useFetch";

const useListaFavoritos = () => {
  return useFetch({ url: "/api/favoritos/productos" });
};

export default useListaFavoritos;
