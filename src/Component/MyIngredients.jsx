import React from 'react'
import { useEffect, useState } from 'react'
import Ingredients from './Ingredients';

export default function MyIngredients(props) {
    const [ingredientsArr, setIngredientsArr] = useState([]);
    useEffect(() => {
        fetch('http://localhost:53700/api/Recipes')
            .then(res => res.json())
            .then(data => {
                setIngredientsArr(data)
            })
        console.log(ingredientsArr[0])
    }, [])



    return (
        <div>
            <h1>My Ingredients</h1>
            <div className='row'>
                {ingredientsArr.map((ingredient, index) => {
                    return (
                        <Ingredients
                            key={ingredient.ingredientId}
                            name={ingredient.ingredientsName}
                            image={ingredient.imgUrl}
                            calories={ingredient.calories}
                        />
                    )
                })}
            </div>
        </div>
    )
}
