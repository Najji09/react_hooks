import { useEffect, useState } from 'react';

const useNetwork = () => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  return status;
};

const UseNetwork = () => {
  const online = useNetwork();
  return (
    <div>
      <h1>{online ? 'Online' : 'Offline'} </h1>
    </div>
  );
};

export default UseNetwork;
