import React from 'react';

const UseFetch = () => {
  const [loading, setLoading] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      if (response.ok === false) throw new Error('Ocorreu um Erro');
    } catch (erro) {
      setError(erro);
    } finally {
      setLoading(false);
      setData(json);
      return { response, json };
    }
  }, []);
  return { request, data, loading, error };
};

export default UseFetch;
