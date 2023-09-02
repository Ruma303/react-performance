import React, { useEffect, useState, useTransition } from 'react';

function UseTransition() {
    const data = [];
    for (let i = 1; i <= 10000; i++) {
        data.push(i);
    }
    const [input, setInput] = useState("");
    const [isPending, startTransition] = useTransition();
    const [filteredData, setFilteredData] = useState(data);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue); //! Senza startTransition()
    };

    /* const handleChange = (e) => {
        const inputValue = e.target.value;
        //* Questo update non è così importante.
        startTransition(() => {
            setInput(inputValue);
        });
    }; */

    useEffect(() => {
        if (!input) {
            setFilteredData(data);
        }
        setFilteredData(data.filter((e) => e.toString().includes(input)));
    }, [input]);

    return (
        <div>
            <h1>useTransition</h1>
            <input type="text" onChange={handleChange} />

            {isPending ? ( //? Se i dati non sono stati calcolati, isPending === true
                <h3>Loading...</h3>


            ) : ( //? Quando i dati saranno stati calcolati, verranno mostrati
                <div>
                    {filteredData.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            )}
        </div>);
}

export default UseTransition;