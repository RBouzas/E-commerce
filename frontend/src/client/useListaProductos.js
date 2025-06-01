import { useMemo } from "react";
import useFetch from "./useFetch";

const useListaProductos = (
  offset,
  limit,
  search,
  minimum,
  maximum,
  available
) => {
  const params = useMemo(() => {
    const params = new URLSearchParams();

    const searchEnabled = search && search.length > 3;
    if (searchEnabled) params.set("search", search);
    params.set("offset", offset);
    if (limit) params.set("limit", limit);
    if (minimum) params.set("minimum", minimum);
    if (maximum) params.set("maximum", maximum);
    if (available) params.set("disponible", available);

    return params;
  }, [search, offset, limit, minimum, maximum, available]);

  return useFetch({ url: `/api/productos?${params}` });
};

export default useListaProductos;
