import { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return state;
};

const UseScroll = () => {
  const { y } = useScroll();
  return (
    <div style={{ height: '10vh' }}>
      <h1
        style={{
          top: 0,
          left: '300px',
          position: 'fixed',
          color: y > 100 ? 'red' : 'blue',
        }}
      >
        Scrolling.....
      </h1>
    </div>
  );
};

export default UseScroll;
