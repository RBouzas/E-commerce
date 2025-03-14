import useFetch from "./useFetch";

const OPTIONS = { method: "PUT" };

const useEditarProducto = (idProducto) => {
  return useFetch(
    {
      url: `/api/productos/modificar/${idProducto}`,
      options: OPTIONS,
    },
    false
  );
};

export default useEditarProducto;
