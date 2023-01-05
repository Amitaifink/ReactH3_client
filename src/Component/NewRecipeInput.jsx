import React, { useEffect } from 'react'
import { useState } from 'react'
import Ingredients from './Ingredients'

export default function () {
    const [recipeName, setRecipeName] = useState('')
    const [recipeCookingMethod, setRecipeCookingMethod] = useState('')
    const [recipeTime, setRecipeTime] = useState('')
    const [recipeImage, setRecipeImage] = useState('')
    const [recipeIngredients, setRecipeIngredients] = useState([])
    const [tempRecipeIngr, setTempRecipeIngr] = useState([])


    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:53700/api/Ingredients');
          const data = await response.json();
          setRecipeIngredients(data);
        }
        fetchData();
      }, []);
      
    const addRecipeToDB = () => {        
       //check if all fields are filled
        if (recipeName === '' || recipeCookingMethod === '' || recipeTime === '' || recipeImage === '' || tempRecipeIngr.length === 0) {
            alert('Please fill all fields')
            return
        }


        fetch('http://localhost:53700/api/Recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipeName: recipeName,
                cookingMethod: recipeCookingMethod,
                time: recipeTime,
                imgUrl: recipeImage,
                ingredients: tempRecipeIngr
            })
        })
        alert('Recipe Added')
        cancelRecipe()
    }
    const cancelRecipe = () => {
        setRecipeName('')
        setRecipeCookingMethod('')
        setRecipeTime('')
        setRecipeImage('')
        setTempRecipeIngr([])
        // clear the checkboxes
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    }

    const changeCheckBox = (key,isChecked) => {
        let ingredient = recipeIngredients.find(ingredient => ingredient.ingredientName === key)
        if (isChecked) {
            setTempRecipeIngr([...tempRecipeIngr, ingredient ])
        } else {
            setTempRecipeIngr(tempRecipeIngr.filter(ingredient => ingredient.ingredientName !== key))
        }
    }

    return (
        <div style={styles.container} className='container'>
            <div style={{marginTop:20}} className='form-group row'>
                <br />
                <input className='form-control' onChange={(e) => { setRecipeName(e.target.value) }} type="text" placeholder="Enter Recipe Name" value={recipeName} />
                <br /><br />
                <input className='form-control' onChange={(e) => { setRecipeCookingMethod(e.target.value) }} type="text" placeholder="Enter Cooking Method" value={recipeCookingMethod} />
                <br /><br />
                <input className='form-control' onChange={(e) => { setRecipeTime(e.target.value) }} type="text" placeholder="Enter Time" value={recipeTime} />
                <br /><br />
                <input className='form-control' onChange={(e) => { setRecipeImage(e.target.value) }} type="text" placeholder="Enter Image Url" value={recipeImage} />
                <br /><br />
            </div>
            <div style={styles.ingsContainer} className='row'>
            <h1 style={styles.h1} className='col-12'>Ingredients</h1>
         
                {recipeIngredients.map((ingredient) => {
                    return (
                        <Ingredients
                            key = {ingredient.ingredientId }
                            name = {ingredient.ingredientName}
                            image={ingredient.imgUrl}
                            calories={ingredient.calories}
                            showCheckBox={true}
                            checkBoxChange ={changeCheckBox}
                        />
                    )
                })}
            </div>
            <div className='row'>
                <button style={styles.btn} onClick={addRecipeToDB} className='btn btn-secondary'>Add</button>
                <button style={styles.btn} onClick={cancelRecipe} className='btn btn-secondary'>Clear</button>
            </div>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
   
        
    },
    btn: {
        margin: 10,
        width: 100,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 10,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
            transform: 'translateY(-5px)',
        }


    }   ,
    h1: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 30,
        

    },
    ingsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',

    

        
    }

}
