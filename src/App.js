import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter App</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        Decrease</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
        Reset</button>
    </div>
  );
}

export default App;
