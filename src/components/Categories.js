import React from 'react';

const Categories = ({setCategories}) => {
  return <section>
    <button onClick={() => setCategories('breakfast')}>Breakfast</button>
  </section>;
};

export default Categories;