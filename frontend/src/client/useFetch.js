import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [dataState, setDataState] = useState({
    data: [],
    loading: true,
    error: null,
    started: false,
    done: false,
  });

  const handleFetch = useCallback(async () => {
    try {
      setDataState((prev) => ({ ...prev, started: true }));
      const response = await fetch(url);

      if (!response.ok) throw new Error(response.statusText);

      const dataApi = await response.json();

      setDataState((prev) => {
        return {
          ...prev,
          loading: false,
          data: dataApi,
          done: true,
        };
      });
    } catch (error) {
      setDataState((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
        done: true,
      }));
    }
  }, [url, setDataState]);

  useEffect(() => {
    if (!dataState.started) handleFetch();
  }, [dataState.started, handleFetch]);

  return dataState;
};

export default useFetch;
