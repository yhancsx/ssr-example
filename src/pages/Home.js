import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
      <div>
        Home
        <div>counter: {count}</div>
        <button type="button" onClick={() => setCount(prev => prev + 1)}>
          increase
        </button>
        <button type="button" onClick={() => setCount(prev => prev - 1)}>
          decrease
        </button>
      </div>
  );
};

export default Home;
