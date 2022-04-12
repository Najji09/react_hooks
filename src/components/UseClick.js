import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};

const UseClick = () => {
  const sayHello = () => {
    console.log('Hi!');
  };
  const input = useRef();
  useEffect(() => {
    setTimeout(() => input.current.focus(), 3000);
  });
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Title</h1>
      <input placeholder="placeholder" ref={input} />
    </div>
  );
};

export default UseClick;
