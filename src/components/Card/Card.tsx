'use client'

import React, { useState } from 'react'

interface Props {
    titulo: string,
    descripcion: string,
    items: string[]
}

function Card({ titulo, descripcion, items }: Props) {
    const [showItems, setShowItems] = useState(false);
    const [cardOpen, setCardOpen] = useState('');

    const handleOpen = (titulo: string) => {
        setShowItems(!showItems);
        setCardOpen(titulo);
    }

    return (
        <div className='content-card-service'>
            <div className='content-header'>
                <h3>{titulo}</h3>
            </div>
            <div className='content-body'>
                <p className='content-descripcion'>{descripcion}</p>
            </div>
            {(items.length > 0) &&
                <div className={`content-show-info ${showItems ? 'scale-up-ver-top open-card' : 'scale-down-ver-top close-card'}`}>
                    <ul>
                        {items.map(item => (
                            <li key={item} >{item}</li>
                        ))}
                    </ul>
                </div>
            }
            <div className='content-foot'>
                <button type='button' onClick={() => handleOpen(titulo)}>{!showItems ? 'Ver más' : 'Ver menos'}</button>
            </div>
        </div>
    )
}

export default Card