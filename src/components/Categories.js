import React from 'react';

const Categories = ({categories, callback}) => {
  return (
    <div className='btn-container'>
      {categories.map(
        category => <button className='filter-btn' key={category} onClick={() => callback(category)}>{category}</button>
      )}
    </div>
  )
};

export default Categories;