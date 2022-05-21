import React, { useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);

  function plusHandler () {
    setCount(prevCount => prevCount + 1);
  }

  function minusHandler () {
    setCount(prevCount => prevCount - 1);
  }

  function multiplyHandler () {
    setCount(prevCount => prevCount * 2);
  }

  function divideHandler () {
    setCount(prevCount => prevCount / 2);
  }

  return {
      value: count,
      plus: plusHandler,
      minus: minusHandler,
      multiply: multiplyHandler,
      divide: divideHandler,
  }
}

export default useCount;