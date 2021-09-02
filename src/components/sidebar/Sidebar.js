import React from 'react'
import './_sidebar.scss'

// import icons
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    // MdSentimentDissatisfied
} from 'react-icons/md'

import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {

    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(log_out())
    }

    return (
        <nav 
            className={ sidebar ? "sidebar open" : "sidebar" }
            onClick={ () => handleToggleSidebar(false) }
        >
            <li>
                <MdHome size={23} />
                <span>Principal</span>
            </li>

            <li>
                <MdSubscriptions size={23} />
                <span>Suscripciones</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Biblioteca</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>Historial</span>
            </li>

            <li>
                <MdThumbUp size={23} />
                <span>Videos que me gustan</span>
            </li>

            {/* <li>
                <MdSentimentDissatisfied size={23} />
                <span>No me gusta</span>
            </li> */}

            <hr />
            <li onClick={handleLogOut}>
                <MdExitToApp size={23} />
                <span>Salir</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
