import React, { useState, useDeferredValue } from 'react';

function UseDeferredValue() {
    const [text, setText] = useState('Hello');

    // Questo valore sarà immediatamente aggiornato
    const textValue = useDeferredValue(text, { timeoutMs: 3000 });

    return (
        <div>
            <h1>useDeferredValue</h1>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>{textValue}</p>
        </div>
    );
}

export default UseDeferredValue;