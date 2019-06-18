import React, { Component } from 'react'

// CSS
import './App.css'

// Components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// Recettes
import recettesAPI from './recettes'

// Firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount(){
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
      context: this,
      state:'recettes'  
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  chargerExemple = () => this.setState({recettes : recettesAPI})

  ajouterRecette = (recette) => {
    const recettes = {...this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette
    this.setState({recettes})
  }

  majRecette = (key, newRecette) => {
    const recettes = {...this.state.recettes}
    recettes[key] = newRecette
    this.setState({recettes})
  }

  render () {
    //console.log(recettes)
    const cards = Object.keys(this.state.recettes)
                        .map(key => <Card 
                                      details={this.state.recettes[key]}
                                      key={key}
                                      />)
    // console.log(cards)
    return (
      <div className='box'>
        <Header
          pseudo={this.state.pseudo}
        />
        <div className='cards'>
           { cards }
        </div>
        <Admin
          recettes={this.state.recettes}
          chargerExemple={this.chargerExemple}
          ajouterRecette={this.ajouterRecette} 
          majRecette={this.majRecette}
        />
      </div>
    )
  }
}

export default App
