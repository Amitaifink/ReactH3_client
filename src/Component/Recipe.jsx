import React, { useState } from 'react';
import Ingredients from './Ingredients';

export default function Recipe(props)  {
    const calcTotalCalories = () => {
        let totalCalories = 0;
        props.ingredientsArr.forEach((item) => {
          totalCalories += item.calories;
        });
        return totalCalories;
      };
    
      const [showModal, setShowModal] = useState(false);
    
      const showIngredients = () => {
        setShowModal(true);
      };
    
      return (
        <div style={styles.div} className='col-md-4'>
          <h2>{props.name}</h2>
          <img style={styles.img} src={props.image} alt={props.name} />
          <p style={styles.p}>Cooking Method: {props.cookingMethod}</p>
          <p style={styles.p}>Total Cooking time: {props.time}</p>
          <p style={styles.p}>Total Calories: {calcTotalCalories()}</p>
          <button
            style={styles.btn}
            className='showBtn btn btn-secondary'
            onClick={showIngredients}
          >
            Show Ingredients
          </button>
          {showModal && (
            <div className='modal' style={styles.modal}>
              <div className='row modal-content' style={styles.modalContent}>
                <span
                  className='close-button'
                  style={styles.closeButton}
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </span>
                <h2 style={styles.modalHeader}>Ingredients:</h2>
                <div style={{margin:'0'}}className='row'>
                    {props.ingredientsArr.map((ingredient) => (                    
                    <Ingredients
                        key={ingredient.ingredientId}
                        name={ingredient.ingredientName}
                        image={ingredient.imgUrl}
                        calories={ingredient.calories}
                        showCheckBox={false}
                    />
                ))}
              </div>
            </div>
        </div>
        )}
    </div>
    );
    };
    
    const styles = {
      showBtn: {
        marginBottom: 20,
      },
      div: {
        border: '1px solid black',
        borderRadius: 13,
        margin: 10,
        textAlign: 'center',
        position: 'relative',
     
        width: '400px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        backgroundColor: 'white',
        height:500
      },
      img: {
        height: 150,
        width: '100%',
        borderRadius: 13,
        marginBottom: 30,
      },
      p: {
        fontSize: '1rem',
        fonfamily: 'monospace',
      },
      btn: {
        marginBottom: 20,
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'white',
        border: 'none',
        borderRadius: 13,
        padding: 10,
        fontSize: '1rem',
        fontFamily: 'monospace',
        cursor: 'pointer',
        position: 'absolute',
        bottom: '1%',
        left: '25%',

        

       
      },
      modal: {
        display: 'block',
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      modalContent: {
        position: 'relative',
        backgroundColor: '#fefefe',
        margin: 'auto',
        padding: 0,
        border: '1px solid #888',
        width: '85%',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        webkitAnimationName: 'animatetop',
        webkitAnimationDuration: '0.4s',
        animationName: 'animatetop',
        animationDuration: '0.4s',
      },
      closeButton: {
        color: 'black',
        float: 'right',
        fontSize: 28,
        fontWeight: 'bold',
        cursor: 'pointer',
    },
      modalHeader: {
        padding: '2px 16px',
        backgroundColor: 'grey',
        color: 'white',
      },
      modalBody: {
        padding: '2px 16px',
      },
      modalFooter: {
        padding: '2px 16px',
        backgroundColor: '#5cb85c',
        color: 'white',
      },
      '@keyframes animatetop': {
        from: {
          top: '-300px',
          opacity: 0,
        },
        to: {
          top: 0,
          opacity: 1,
        },
      },
    };