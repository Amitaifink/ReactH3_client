import React from 'react'
import { useEffect, useState } from 'react'
import Recipe from './Recipe';

export default function MyRecipes(props) {
    const [recipesArr, setRecipesArr] = useState([]);
    useEffect(() => {
        fetch('http://localhost:53700/api/Recipes')
            .then(res => res.json())
            .then(data => {
                setRecipesArr(data)
            })

    }, [])
    return (
        <div  className='container' >
            
            <div style={styles.container} className='row'>
                <div className='col-12'>

            <h1 style={styles.h1}>My Recipes</h1>
                </div>
                {recipesArr.map((recipe) => {
                    return (
                        <Recipe
                            key={recipe.recipeId}
                            name={recipe.recipeName}
                            image={recipe.imgUrl}
                            cookingMethod={recipe.cookingMethod}
                            time={recipe.time}
                            ingredientsArr={recipe.ingredients}
                        />
                    )
                })}
            </div>
        </div>
    )
}
const styles = {
    h1: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,

        textShadow: '2px 2px 4px #000000',
        },
    container: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',


        padding: 20,

    },


}

