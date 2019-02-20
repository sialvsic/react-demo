import React, { useState, useEffect } from 'react';

function View() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} times`;
  });

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

/*
What does useEffect do?
By using this Hook, you tell React that your component needs to do something after render.
React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

Why is useEffect called inside a component?
Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.
We don’t need a special API to read it — it’s already in the function scope.
 Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

Does useEffect run after every render?
 Yes! By default, it runs both after the first render and after every update.
 (We will later talk about how to customize this.)
 Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”.
  React guarantees the DOM has been updated by the time it runs the effects.
*/
