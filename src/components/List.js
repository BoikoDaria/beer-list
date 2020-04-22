import React from 'react';
import BeerItem from './BeerItem';
import './List.css';

export default ({ items, toggleFavorites, favorites }) => {
    return (
        <div className='beer-list'>
            <div>
                {
                    items.map((item) => (
                        <BeerItem
                            key={item.id}
                            favorites={favorites}
                            onClick={() => toggleFavorites(item)}
                            data={item} />
                    ))
                } 
            </div>
        </div>
    );
}