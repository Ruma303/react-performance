import React, { useState, useEffect, useDeferredValue } from 'react';

function UseDeferredValue() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const deferredData = useDeferredValue(data);

    useEffect(() => {
        const url = search
            ? `https://jsonplaceholder.typicode.com/photos/${search}`
            : 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then((response) => response.json())
            .then((dataFetched) => {
                const data = Array.isArray(dataFetched) ? dataFetched : [dataFetched];
                setData(data);

            });
    }, [search]);

    return (
        <div>
            <h1>useDeferredValue</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Inserisci un numero..."
            />
            {deferredData.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>ID: {item.id}</p>
                    <img src={item.thumbnailUrl} alt={item.title} />
                </div>
            ))}
        </div>
    );
}

export default UseDeferredValue;