import { useEffect } from "react";
import useFetch from "./useFetch";

const useListaProductos = (offset, limit, search) => {
  const params = new URLSearchParams();

  const searchEnabled = search && search.length > 3;
  if (searchEnabled) params.set("search", search);
  params.set("offset", offset);
  if (limit) params.set("limit", limit);
  const paramsString = params.toString();

  const fetchHook = useFetch({ url: `/api/productos?${params}` }, false);
  const { request } = fetchHook;

  useEffect(() => {
    request && request();
    return () => {};
  }, [request, paramsString]);

  return fetchHook;
};

export default useListaProductos;
