import React from 'react';
import './BeerItem.css';

const BeerItem = ({ onClick, data }) => {
    return (
        <div className="beer-item">
            <div
                className="beer-item-img"
                style={{ backgroundImage: `url(${data.image_url})` }}
            />
            <div className="beer-item-metadata" onClick={onClick}>
                <p className="beer-item-name">{data.name}</p>
                <p className="beer-item-description">{data.description}</p>
            </div>
        </div>
    );
}

export default BeerItem;