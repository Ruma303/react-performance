import React, { useState } from 'react';
import MemoizedChildComponent from './ChildComponent';
function ParentComponent() {
    console.log("ParentComponent renderizzato.");
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);
    return (
        <div>
            <button onClick={() => setOtherState(otherState + 1)}>
                Increment Other State
            </button>
            <p>Other state: { otherState }</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
            <MemoizedChildComponent count={count} />
        </div>
    );
}
export default ParentComponent;


