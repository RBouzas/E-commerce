import { useEffect } from "react";
import useFetch from "./useFetch";

const useListaProductos = (offset, limit, search) => {
  const params = new URLSearchParams();

  const searchEnabled = search && search.length > 3;
  if (searchEnabled) params.set("search", search);
  params.set("offset", offset);
  params.set("limit", limit);

  const fetchHook = useFetch({ url: `/api/productos?${params}` }, false);
  const { request } = fetchHook;

  useEffect(() => {
    request && request();
    return () => {};
  }, [request, params.toString()]);

  return fetchHook;
};

export default useListaProductos;
