import React from 'react';

const Categories = ({categories, callback}) => {
  return (
    <section>
      {categories.map(
        category => <button key={category} onClick={() => callback(category)}>{category}</button>
      )}
    </section>
  )
};

export default Categories;