import React, { Component } from 'react'

import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'

// import Firebase tools
import firebase from 'firebase/app' 
import  'firebase/auth' 
import base , { firebaseApp } from '../base'

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    handleAuth = async (authData) => {
        const box = await base.fetch(this.props.pseudo, {context: this})

        if(!box.chef){
            await base.post(`${this.props.pseudo}/chef`,{
                data: authData.user.uid
            })
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    render() {
        const {recettes, ajouterRecette, majRecette, supprimerRecette, chargerExemple} = this.props

        // si l'utilisateur n'est pas connecté
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}></Login>
        }

        if(this.state.uid !== this.state.chef){
            return(
                <div>
                    Tu n'es pas le chef de cette boite !
                </div>
            )
        }
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette}/>
                {
                    //console.log(recettes)
                    Object.keys(recettes).map(key => (
                        <AdminForm 
                            key={key}
                            id={key}
                            majRecette={majRecette}
                            supprimerRecette={supprimerRecette}
                            recettes={recettes}
                            />
                    ))
                }
                <footer>
                    <button
                        onClick={chargerExemple}
                    >Remplir</button>
                </footer>
                
            </div>
        )
    }
}


export default Admin