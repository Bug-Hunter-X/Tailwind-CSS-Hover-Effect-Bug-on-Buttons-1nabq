```javascript
//bugSolution.js
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100">
      <button onClick={() => setCount(count + 1)} className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700 !important active:bg-blue-800 !important focus:outline-none focus:ring-2 focus:ring-blue-300">
        Count is {count}
      </button>
    </div>
  );
}

export default App;
```