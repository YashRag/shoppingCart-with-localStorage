import React from 'react'

const Item = ({item,onRemoveItem}) => {
  console.log(item);
  return (
    <>
      <li>
        {item}
        <button className="delete" onClick={()=>onRemoveItem(item)}>x</button>
      </li>
    </>
  )
}

export default Item;
