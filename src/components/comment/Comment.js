import React from 'react'
import moment from 'moment'
import './_comment.scss'

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_Ea7Wyc7-XNssIk4eSNx0IBR5l4wZnWKhw&usqp=CAU"
                alt="Imagen de perfil"
                className="rounded-circle mr-3" 
            />
            <div className="comment__body">
                <p className="comment__header mb-3 mx-3">
                    Adrian Gette •  {moment("2021-09-10").fromNow()}
                </p>
                <p className="mb-3 mx-3">Excelente video!!!</p>
            </div>
        </div>
    )
}

export default Comment
