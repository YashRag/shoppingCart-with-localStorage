import { useEffect, useState } from 'react'

import './App.css'
import Item from './Item';

function App() {
  const [items, setItem] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return []

    return JSON.parse(localValue);
  });
  

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(items));
  },[items])

  function onRemoveItem(itemToRemove){
      const newItems = items.filter((item)=>{
        return item !== itemToRemove;
      })
      setItem(newItems);
  }

  function onSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItemd = [...items, input.value];
    localStorage.setItem("items", newItemd);
    console.log(input.value);
    setItem(newItemd);
    console.log(newItemd);
    form.reset();
    
  }
  return (
    <>
     <h1>Shopping List with localstorage</h1>
     <div className='shopping-list'>
        <h2>Items to Buy</h2>
        <form onSubmit={onSubmit}>
          <input 
            type="text"
            name="item"
            placeholder='enter item'
            required
          />
        </form>
        <ul>
          {
            items.map((item,index)=>{
            return  <Item 
                onRemoveItem={onRemoveItem}  
                key = {index + item}
                item={item}/>
            })
          }
        </ul>
     </div>
    </>
  )
}

export default App
