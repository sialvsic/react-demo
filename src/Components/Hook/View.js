import React, { useState } from 'react';

function View() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  console.log(count);
  console.log(setCount);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default View;
