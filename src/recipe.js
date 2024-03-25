import React from 'react';
import './recipe.css';

const Recipe = (props) => {

    return (
        <div className="recipe-details">
            <h1>Name = {props.title}</h1>
            <p>Calories={props.calories}</p>
            <ol>{props.ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <img src={props.image} alt="" />
        </div>

    )
}

export default Recipe;