import React from 'react';

const Menu = ({item}) => {
  const {title, desc, img, price} = item

  return (
    <article>
      <h3>{title}</h3>
      <img src={img}/>
      <p>{price}</p>
      <p>{desc}</p>
    </article>
  );
};

export default Menu;