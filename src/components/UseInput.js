import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const UseInput = () => {
  const maxLength = (value) => value.length <= 10;
  const name = useInput('Ms.', maxLength);
  return (
    <div>
      <h1>Use Input</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default UseInput;
