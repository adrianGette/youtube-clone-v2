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

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
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
            <li>
                <MdExitToApp size={23} />
                <span>Salir</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
