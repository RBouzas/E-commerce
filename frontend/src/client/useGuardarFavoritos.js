import useFetch from "./useFetch";

const OPTIONS = { method: "POST" };

const useGuardarFavoritos = () => {
  return useFetch(
    {
      url: "/api/favoritos/agregar",
      options: OPTIONS,
    },
    false
  );
};

export default useGuardarFavoritos;
