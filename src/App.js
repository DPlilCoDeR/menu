import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';


const allCategories = ['all', ...new Set(items.map( (item) => item.category))];


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
      <section className='menu section'>
        <div>
          <h2 className='title'>
            Our Menu
          </h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} callback={filterMenu}/>
        <div className='section-center'>
        {
          menuItems.map(item => {
              return <Menu key={item.id} item={item}/>
            }
          )
        }
        </div>
        
      </section>
    </main>
  )
}

export default App;