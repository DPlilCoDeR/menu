import React, { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

function App() {
  const [eats, setEats] = useState(items)
}

export default App;