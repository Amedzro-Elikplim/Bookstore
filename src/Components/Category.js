import React, { useState } from 'react';

function Category() {
  const [state, setState] = useState('');

  return (
    <div>
      <div>{state}</div>
      <button type="button" onClick={() => setState('Under Construction')}>Check status</button>
    </div>
  );
}

export default Category;
