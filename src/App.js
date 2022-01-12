import React, { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

function App() {
  const [food, setFood] = useState(items)
  const [categories, setCategories] = useState('')
  console.log(categories)

  return (
    <main>
      <Categories callback={setCategories}/>
      {food.map(food => (
            <Menu key={food.id} item={food}/>
          )
        )
      }
    </main>
  )
}

export default App;