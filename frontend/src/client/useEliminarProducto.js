import { useMemo } from "react";
import useFetch from "./useFetch";

const OPTIONS = { method: "DELETE" };

const useEliminarProducto = (id) => {
  const url = useMemo(() => `/api/productos/eliminar/${id}`, [id]);

  return useFetch(
    {
      url,
      options: OPTIONS,
    },
    false
  );
};

export default useEliminarProducto;
