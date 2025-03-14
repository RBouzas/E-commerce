import { useMemo } from "react";
import useFetch from "./useFetch";

const OPTIONS = { method: "GET" };

const useVerDetalle = (idProducto) => {
  const url = useMemo(() => `/api/productos/${idProducto}`, [idProducto]);
  return useFetch({
    url,
    options: OPTIONS,
  });
};

export default useVerDetalle;
