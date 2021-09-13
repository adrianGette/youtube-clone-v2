import React from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'


const handleComment = () => {

}

const Comments = () => {
    return (
        <div className="comments">
            <p>503 comentarios</p>
            <div className="comments__form d-flex w-100 my-2 mb-4">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_Ea7Wyc7-XNssIk4eSNx0IBR5l4wZnWKhw&usqp=CAU"
                    alt="Imagen de perfil"
                    className="rounded-circle mr-3" 
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input 
                        type="text"
                        className="flex-grow-1 mx-5"
                        placeholder="Escribe un comentario. . ."
                    />
                    <button className="border-0 p-2">Comentar</button>
                </form>
            </div>
            <div className="comments__list">
                {
                    [...Array(15)].map(() => (
                        <Comment />
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
