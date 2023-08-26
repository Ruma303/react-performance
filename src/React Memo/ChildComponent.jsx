import React from 'react';

function ChildComponent({ count }) {
    console.log('ChildComponent renderizzato.');
    return <p>Count: {count}</p>;
}

const MemoizedChildComponent = React.memo(ChildComponent);
export default MemoizedChildComponent;
