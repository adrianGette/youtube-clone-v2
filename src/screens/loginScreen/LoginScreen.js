import React from 'react'

import './_loginScreen.scss'

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" />
                <button>Iniciar sesión con Google</button>
                <p>Este proyecto usa YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
