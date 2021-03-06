import React from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="border border-dark header">
            <FaBars 
                className="header__menu"
                size={26}
                onClick={ () => handleToggleSidebar() }
            />

            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" className="header__logo" />

            <form>
                <input type="text" placeholder="Buscar" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_Ea7Wyc7-XNssIk4eSNx0IBR5l4wZnWKhw&usqp=CAU"
                alt="Imagen de perfil" />
            </div>
        </div>
    )
}

export default Header
