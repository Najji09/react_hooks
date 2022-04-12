import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(new Date());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

const UseAxios = () => {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  console.log(loading, JSON.stringify(data), error);
  return (
    <div>
      <button onClick={refetch}>Refetch Data</button>
      <h2>{loading && 'loading'} </h2>
    </div>
  );
};

export default UseAxios;
