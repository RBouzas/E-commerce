import useFetch from "./useFetch";

const OPTIONS = { method: "DELETE" };

const useBorrarDeseado = () => {
  return useFetch(
    {
      url: `/api/deseados/eliminar`,
      options: OPTIONS,
    },
    false
  );
};

export default useBorrarDeseado;
