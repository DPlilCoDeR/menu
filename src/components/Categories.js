import React from 'react';

const Categories = ({callback}) => {
  return (
    <section>
      <button onClick={() => callback('breakfast')}>Breakfast</button>
      <button onClick={() => callback('lunch')}>lunch</button>
      <button onClick={() => callback('shakes')}>shakes</button>

    </section>
  )
};

export default Categories;