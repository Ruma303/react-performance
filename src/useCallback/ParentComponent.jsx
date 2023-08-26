//% useCallback

/* import React, { useState, useCallback } from 'react';
const ParentComponent = () => {
    const [number, setNumber] = useState(1);

    //! Senza useCallback()

    const calculateFactorial = (num) => {
        console.log('calculateFactorial() attivata');
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    };

     //* Con useCallback()
    const calculateFactorial = useCallback((num) => {
        console.log('calculateFactorial() attivata');
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }, []);

    return (
        <>
            <h1>useCallback</h1>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))} />
            <div>
                Fattoriale: {calculateFactorial(number)}
            </div>
        </>
    );
}
export default ParentComponent;
 */

//% useCallback + React.memo
/* import React, { useState, useCallback } from 'react';
import { ChildComponent } from './ChildComponent';

const ParentComponent = () => {
    console.log('ParentComponent rendered');
    const [count, setCount] = useState(0);

    //! Senza useCallback()
    const increment = () => {
        setCount(count => count + 1);
    };

    //* Con useCallback()
    const increment = useCallback(() => {
        setCount(count => count + 1);
    }, []);

    return (<>
            <h1>useCallback e React.memo()</h1>
            <p>Count: {count}</p>
            <ChildComponent onClick={increment} />
        </>
    );
};
export default ParentComponent;
 */

