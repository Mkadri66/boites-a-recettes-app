import React from 'react'

const AdminForm = ({
    id : key,
    majRecette,
    supprimerRecette,
    recettes}) => 
    {
        // Recette que l'on veut modifier
        const recette = recettes[key]

        const handleChange = (event, key) => {
            const {name, value } = event.target
            // recette que l'on modifie
            const recette = recettes[key]
            // champ que l'on modifie
            recette[name] = value
            //console.log(recette[name])
            // on passe la clé et la recette modifiée
            majRecette(key, recette)
        }
        

        return (
            <div className="card">
                <form className="admin-form">
                    <input 
                        value={recette.nom}
                        onChange={ e => handleChange(e, key)}
                        name="nom" 
                        type="text" 
                        placeholder="Nom de la recette"/>
                    <input  
                        value={recette.image}
                        onChange={ e => handleChange(e, key)}
                        name="image" 
                        type="text" 
                        placeholder="Nom de l'image"/>
                    <textarea 
                        value={recette.ingredients}
                        onChange={ e => handleChange(e, key)}
                        name="ingredients" 
                        rows="3" 
                        placeholder="Les ingrédients de la recette">
                    </textarea>
                    <textarea 
                        value={recette.instructions}
                        onChange={ e => handleChange(e, key)}
                        name="instructions" 
                        rows="15" 
                        placeholder="Liste des instructions">
                    </textarea>
                </form>
                <button onClick={ () => supprimerRecette(key)}>Supprimer</button>
            </div>
        )
}

export default AdminForm
