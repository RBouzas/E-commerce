import { useMemo } from "react";
import useFetch from "./useFetch";

const OPTIONS = { method: "PUT" };

const useEditarProducto = (idProducto) => {
  const url = useMemo(
    () => `/api/productos/modificar/${idProducto}`,
    [idProducto]
  );

  return useFetch(
    {
      url,
      options: OPTIONS,
    },
    false
  );
};

export default useEditarProducto;
