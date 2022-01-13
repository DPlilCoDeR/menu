import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';


const allCategories = ['all', ...new Set(items.map( (item) => item.category))];
console.log(allCategories)


function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterMenu = (category) => {
    if (category === 'all') {
      return setMenuItems(items)
    }
    const filterFood = items.filter( item => item.category === category)
    setMenuItems(filterFood);
  }


  return (
    <main>
      <Categories callback={filterMenu}/>
      {
        menuItems.map(item => {
            return <Menu key={item.id} item={item}/>
          }
        )
      }
    </main>
  )
}

export default App;