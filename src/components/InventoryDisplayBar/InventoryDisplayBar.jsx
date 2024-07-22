import React from 'react'
import './InventoryDisplayBar.scss';

const InventoryDisplayBar = ({ inventory }) => {
  return (
    <div className="inventory-display">
      <div className="category">
        <h2>{inventory.displayName}</h2>
        {inventory.category.map((subcategory) => (
          <div key={subcategory.id} className="subcategory">
            <h3>{subcategory.displayName}</h3>
             {subcategory.items.map((item) => (
              item.qty > 0 && (
                <div key={item.id} className="item">
                  <p>{item.displayName} </p>
                  <h5>{item.qty}</h5>

                </div>
              )
            ))} 

          </div>
        ))}
      </div>
    </div>

  )
}

export default InventoryDisplayBar;