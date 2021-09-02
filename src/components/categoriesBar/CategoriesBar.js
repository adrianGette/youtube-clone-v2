import React, { useState } from 'react'
import './_categoriesBar.scss'

const keywords = [
    'Todos',
    'Programación',
    'Patrones de diseño',
    'Metodologías ágiles',
    'Música',
    'Fútbol',
    'Celulares',
    'Laptops',
    'Recetas de cocina',
    'Tendencias de música urbana',
    'En vivo',
    'Noticias',
    'Fútbol argentino',
    'Criptomonedas',
    'Billeteras digitales',
    'Bases de datos',
    'Punk rock music'
]

const CategoriesBar = () => {

    const [ activeElement, setActiveElement ] = useState('Todos');

    const handleClick = (value) => {
        setActiveElement(value);
    }

    return (
        <div className="categoriesBar">
            { keywords.map( (value, i) => (
                <span 
                    key={i}
                    onClick={ () => handleClick(value) }
                    className={ activeElement === value ? 'active' : '' }
                >{value}</span>) 
            ) }
        </div>
    )
}

export default CategoriesBar
