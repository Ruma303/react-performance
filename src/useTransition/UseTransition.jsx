import React, { useEffect, useState, useTransition } from 'react';

function UseTransition() {
  const data = [];
  for (let i = 1; i <= 1000; i++) {
    data.push(i);
  }
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    const { value } = e.target;
    startTransition(() => {
      setInput(value);
    });
};

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
      {!isPending ? (
        <div>
          {filteredData.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : (
        <div>
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default UseTransition;