import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

function App() {
  const [food, setFood] = useState(items)
  const [categories, setCategories] = useState('lunch')

  const filterMenu = () => {
    console.log(categories);
    const filterFood = food.filter( food => food.category === categories)
    setFood(filterFood);
  }

  useEffect(() => filterMenu(), [categories])

  return (
    <main>
      <Categories callback={setCategories}/>
      {
        food.map(eat => {
            return <Menu key={eat.id} item={eat}/>
          }
        )
      }
    </main>
  )
}

export default App;