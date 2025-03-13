import { useMemo } from "react";
import useFetch from "./useFetch";

const useListaProductos = (offset, limit, search) => {
  const params = useMemo(() => {
    const result = new URLSearchParams();
    const searchEnabled = search && search.length > 3;
    if (searchEnabled) result.set("search", search);
    result.set("offset", offset);
    if (limit) result.set("limit", limit);
    return result;
  }, [offset, limit, search]);

  return useFetch({ url: `/api/productos?${params}` }, true);
};

export default useListaProductos;
