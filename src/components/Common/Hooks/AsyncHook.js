import { useState, useEffect } from "react";
import axios from "axios";

const METHODS = {
  GET: "get",
  POST: "post",
};
const useAsync = (method, url, body, dispatcher) => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const { data } = await axios({
          method: method,
          url: url,
          data: body,
        });

        dispatcher(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [method, url]);

  return { isLoading, serverError };
};

export { useAsync, METHODS };
