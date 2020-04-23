import React from 'react';
import BeerItem from './BeerItem';
import './List.css';

export default ({ items, toggleFavorites, title }) => {
    return (
        <div className='beer-list-container'>
            <h3>{title}</h3>
            <div className='beer-list'>
                {
                    items.map((item) => (
                        <BeerItem
                            key={item.id}
                            onClick={() => toggleFavorites(item)}
                            data={item} />
                    ))
                } 
            </div>
        </div>
    );
}