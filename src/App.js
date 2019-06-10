import React, { Component } from 'react'

// CSS
import './App.css'

// Components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// Recettes
import recettesAPI from './recettes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargerExemple = () => this.setState({recettes : recettesAPI})

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
          chargerExemple={this.chargerExemple}
        />
      </div>
    )
  }
}

export default App
