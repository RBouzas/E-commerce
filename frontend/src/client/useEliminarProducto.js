import useFetch from "./useFetch";

const OPTIONS = { method: "DELETE" };

const useEliminarProducto = (id) => {
  return useFetch(
    {
      url: `/api/productos/eliminar/${id}`,
      options: OPTIONS,
    },
    false
  );
};

export default useEliminarProducto;
