import React from 'react'

const Login  = ({authenticate}) => {
    return (
        <div className="login">
            <h2>Connecte pour créer tes recettes !</h2>
            <button 
                onClick={authenticate}
                className="facebook-button">
                Me connecter avec facebook
            </button>
        </div>
    )

}

export default Login
