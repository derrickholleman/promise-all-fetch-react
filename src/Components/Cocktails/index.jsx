import React from 'react'

const Cocktail = ({cocktail}) => {
    return (
        <div className='container'>
            {cocktail.drinks[0].strDrink} is a {cocktail.drinks[0].strGlass} made with {cocktail.drinks[0].strIngredient1} and {cocktail.drinks[0].strIngredient2}
        </div>
    )
}

export default Cocktail
