import React, { Component } from 'react'
// CSS
import './App.css'

// Components
import Header from './components/Header'
import Admin from './components/Admin'

// Recettes
import recettes from './recettes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargerExemple = () => this.setState({recettes})

  render () {
    console.log(recettes)
    return (
      <div className='box'>
        <Header
          pseudo={this.state.pseudo}
        />
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
        <Admin
          chargerExemple={this.chargerExemple}
        />
      </div>
    )
  }
}

export default App
