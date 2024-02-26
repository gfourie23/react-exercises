import React, { useState } from 'react';
//import Deck from './Deck';

function Card({ name, image }) {
    return <img
        className="Card"
        alt={name}
        src={image} />;
}

export default Card;

