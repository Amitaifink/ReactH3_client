import { textAlign } from '@mui/system'
import React from 'react'
import { useState } from 'react'

export default function () {
  const [ingredientName, setIngredientName] = useState('')
  const [ingredientCalories, setIngredientCalories] = useState('')
  const [ingredientImage, setIngredientImage] = useState('')

  const addIngreditnToDB = () => {
   if(ingredientName === '' || ingredientCalories === '' || ingredientImage === ''){
    //alert user to fill all fields, do it with a modal
     alert('Please fill all fields')
     return
    }
    fetch('http://localhost:53700/api/Ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredientName: ingredientName,
        calories: ingredientCalories,
        imgUrl: ingredientImage
      })
    })
    clearTxtInputs()
    alert('Ingredient Added')

  }
  const clearTxtInputs = () => {
    setIngredientName('')
    setIngredientCalories('')
    setIngredientImage('')
  }
  return (
    <div className='container'>
      <h1 style={styles.h1}>Add New Ingredient</h1>
      <div className="form-group">
        <p><input style={styles.input} className="form-control" onChange={(e) => { setIngredientName(e.target.value) }} value={ingredientName} type="text" placeholder="Enter Ingredient Name" /></p>
        <p><input style={styles.input} className="form-control" onChange={(e) => { setIngredientCalories(e.target.value) }} type="number" value={ingredientCalories} placeholder="Enter Calories" /></p>
        <p><input  style={styles.input}className="form-control" onChange={(e) => { setIngredientImage(e.target.value) }} type="text" value={ingredientImage} placeholder="Enter Image URL" /></p>
        <button style={styles.button} onClick={addIngreditnToDB} className='btn btn-secondary'>Add</button>
        <button style={styles.button} onClick={clearTxtInputs} className='btn btn-secondary'>Clear</button>
      </div>
    </div>
  )
}
const styles = {

  input: {
    width: '100%',
    height: 40,
    border: '1px solid #ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10
  },  
  h1 : {
    color: 'red',
    textAlign: 'center'
  },
  button: {
    width: '100%',
    height: 40,
    border: '1px solid #ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    FontFace: 'bold',
  
  }

}

