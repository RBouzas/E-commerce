import { useCallback, useEffect, useState } from "react";

const BASENAME = "http://localhost:8080";

export const useFetch = ({ url, options }, immediate = true) => {
  const [dataState, setDataState] = useState({
    data: null,
    loading: immediate,
    error: null,
    started: false,
    done: false,
    request: null,
  });

  const handleFetch = useCallback(
    async (callOptions = {}) => {
      try {
        setDataState((prev) => ({
          ...prev,
          started: true,
          loading: true,
          done: false,
        }));
        const response = await fetch(BASENAME + url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          ...options,
          ...callOptions,
        });

        if (!response.ok) throw new Error(response.statusText);

        const dataApi = response.status === 204 ? null : await response.json();

        setDataState((prev) => {
          return {
            ...prev,
            loading: false,
            data: dataApi,
            done: true,
            error: null,
          };
        });
      } catch (error) {
        setDataState((prev) => ({
          ...prev,
          loading: false,
          error: error,
          done: true,
          data: [],
        }));
      }
    },
    [url, options, setDataState]
  );

  useEffect(() => {
    setDataState((prev) => ({ ...prev, request: handleFetch }));

    if (immediate) handleFetch();
  }, [immediate, handleFetch]);

  return dataState;
};

export default useFetch;
