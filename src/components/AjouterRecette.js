import React, { Component } from 'react'

class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients:'',
        instructions: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        //console.log(name, value)
        this.setState({[name] : value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const recette = {... this.state}
        console.log(recette)
        this.props.ajouterRecette(recette)
        // Reset 
        Object.keys(recette).forEach(item => {
            recette[item] = ''
        })
        this.setState({...recette})
    }
    render() {
        return (
            <div className="cards">
                <form className="admin-form ajouter-recette" 
                      onSubmit={this.handleSubmit}>
                    <input name="nom" 
                           type="text" 
                           value={this.state.nom} 
                           onChange={this.handleChange} 
                           placeholder="Nom de la recette"/>
                    <input name="image" 
                           type="text" 
                           value={this.state.image} 
                           onChange={this.handleChange} 
                           placeholder="Nom de l'image"/>
                    <textarea name="ingredients" 
                              rows="3" 
                              value={this.state.ingredients} 
                              onChange={this.handleChange} 
                              placeholder="Les ingrédients de la recette">
                    </textarea>
                    <textarea name="instructions" 
                              rows="15" 
                              value={this.state.instructions} 
                              onChange={this.handleChange} 
                              placeholder="Liste des instructions">
                    </textarea>
                    <button type="submit">Ajouter une recette</button>
                </form>
            </div>
        )
    }
}

export default AjouterRecette