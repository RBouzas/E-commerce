import { useMemo } from "react";
import useFetch from "./useFetch";

const useListaProductos = (offset, limit, search) => {
  const params = useMemo(() => {
    const params = new URLSearchParams();

    const searchEnabled = search && search.length > 3;
    if (searchEnabled) params.set("search", search);
    params.set("offset", offset);
    if (limit) params.set("limit", limit);

    return params;
  }, [search, offset, limit]);

  return useFetch({ url: `/api/productos?${params}` });
};

export default useListaProductos;
