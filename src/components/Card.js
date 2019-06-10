import React from 'react'

const Card = ({details}) => {
    const ingredients = details.ingredients
                                .split(',')
                                .map(ingredient => <li key={ingredient}>{ingredient}</li>)
    const instructions = details.instructions
                                .split('\n')
                                .map(instruction => <li key={instruction}>{instruction}</li>)
 
    return (
        <div className="card">
            <div className="image">
                <img src={require(`../img/${details.image}`)} alt={details.nom}/>
            </div>
            <div className="recette">
                <h2> {details.nom} </h2>
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol className="liste-instructions">
                    {instructions}
                </ol>
            </div>
        </div>
    )
}

export default Card
