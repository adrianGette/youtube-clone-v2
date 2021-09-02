import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth.action'

import './_loginScreen.scss'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login())
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" />
                <button onClick={handleLogin}>Iniciar sesión con Google</button>
                <p>Este proyecto usa YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
