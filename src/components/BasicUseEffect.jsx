import React, { useEffect, useState } from 'react';

const Basicuseeffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState('');

  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count:{count}</button>
      <input type="text" value={item} onChange={e => setItem(e.target.value)} />
    </div>
  );
};

export default Basicuseeffect;
