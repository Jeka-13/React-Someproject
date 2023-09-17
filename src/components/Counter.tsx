import React, {useState} from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}></button>
        </div>
    );
};

