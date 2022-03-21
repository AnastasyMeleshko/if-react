import React from 'react';
import './HomesItems.css';

function HomesItem(element) {
   return (
       <div className="homes-item col-lg-3 col-md-4 col-sm-6 col-xs-6">
           <img className="homes-item-img" src={element.item.imageUrl} alt={element.item.name}/>
           <p className="homes-item-title">{element.item.name}</p>
           <p className="homes-item-location">{element.item.city}, {element.item.country}</p>
       </div>
   )
}

export default HomesItem;
