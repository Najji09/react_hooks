import { useState } from 'react';
const UseState = () => {
  const [item, setItem] = useState(0);
  const addItem = () => {
    setItem(item + 1);
  };
  const minusItem = () => {
    setItem(item - 1);
  };
  return (
    <div>
      <h1>Item Number:{item}</h1>
      <button onClick={addItem}>Add</button>
      <button onClick={minusItem}>Minus</button>
    </div>
  );
};
export default UseState;
