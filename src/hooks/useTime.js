import { useState, useCallback } from 'react';

const useTime = (initialState = {}) => {
  const [time, setTime] = useState(initialState);

  const handleChange = useCallback((evt) => {
    const { name, value: inputValue } = evt.target;

    const value = inputValue;

    setTime({
      ...time,
      [name]: value > 59 ? 59 : value,
    });
  });
  return {
    time,
    handleChange,
  };
};

export default useTime;
