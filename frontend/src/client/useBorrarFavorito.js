import useFetch from "./useFetch";

const OPTIONS = { method: "DELETE" };

const useBorrarFavorito = () => {
  return useFetch(
    {
      url: `/api/favoritos/eliminar`,
      options: OPTIONS,
    },
    false
  );
};

export default useBorrarFavorito;
