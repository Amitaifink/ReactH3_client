import React from 'react';
import './App.css';
import Ingredient from './Component/Ingredients';
import Recipe from './Component/Recipe';
import NewIngredientInput from './Component/NewIngredientInput';
import MyRecipes from './Component/MyRecipes';
import MyIngredients from './Component/MyIngredients';
import { Switch, Route, Link, Routes } from 'react-router-dom';
import NewRecipeInput from './Component/NewRecipeInput';

import ResponsiveAppBar from './Component/ResponsiveAppBar.jsx';
import MyKitchen from './Component/MyKitchen';



function App() {
  return (
    <div >
     <ResponsiveAppBar/>
    
        <Routes>
          <Route path='/' element={<MyKitchen/>} />
          <Route path='/MyRecipes' element={<MyRecipes />} />
          <Route path='/NewIngredientInput' element={<NewIngredientInput />} />
          <Route path='/NewRecipeInput' element={<NewRecipeInput />} />
        </Routes>

    
    </div>
  );
}
export default App;
