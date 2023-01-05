import React from 'react';

export default function Ingredients(props) {
const checkBoxChange = (e) => {
    if (e.target.checked) {
        props.checkBoxChange(props.name, true);  
    } else {
        props.checkBoxChange(props.name, false);
    }
}

  return (
    <div style={styles.ingredientCss} className='col-sm-3'>
        {props.showCheckBox && <label>Add to Recipe <input onChange={checkBoxChange} type='checkbox' title='Add to Recipe'/></label>}
        <h2>{props.name}</h2>
        <img style={styles.imgCss} src={props.image} alt={props.name} />
        <p style={styles.pCss}>calories: {props.calories}</p>
    </div>
);
}
const styles = {
  ingredientCss: {
      border: '1px solid black',
      borderRadius: '13px',
      margin: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  imgCss: {
      width: '100%',
      height: 100,
      borderRadius: '13px',
      margin: '0 auto',
  },
  pCss: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
    }
    
}