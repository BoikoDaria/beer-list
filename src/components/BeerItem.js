import React from 'react';
import './BeerItem.css';

const BeerItem = ({ favorites, onClick, data }) => {
    const favItem = favorites.find((item) => item.id === data.id);
    const iconClassName = favItem ? 'favorite-icon-active' : 'favorite-icon-inactive';

    return (
        <div className="beer-item">
            <div
                className="beer-item-img"
                style={{ backgroundImage: `url(${data.image_url})` }}
            />
            <div className="beer-item-metadata">
                <p className="beer-item-name">{data.name}</p> 
                <div className={`favorite-icon ${iconClassName}`} onClick={onClick} /> 
                <p className="beer-item-description">{data.description}</p>
            </div>
        </div>
    );
}

export default BeerItem;