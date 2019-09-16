import React, {useState} from 'react';

function Hooks() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
         +1
        </button>
        <button onClick={() => setCount(count - 1)}>
         -1
        </button>
        <button onClick={() => setCount(0)}>
         REset
        </button>
      </div>
    );
}

export default Hooks;