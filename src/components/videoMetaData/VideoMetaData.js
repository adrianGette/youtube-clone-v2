import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ReactShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Titulo del video</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(1000).format("0.a")} vistas •
                        {moment('2021-09-10').fromNow()}
                    </span>
                
                <div>
                    <span className="mx-3">
                        <MdThumbUp size={26} /> {numeral(1000).format("0.a")}
                    </span>
                    <span className="mx-3">
                        <MdThumbDown size={26} /> {numeral(1000).format("0.a")}
                    </span>
                </div>
            </div>
            </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_Ea7Wyc7-XNssIk4eSNx0IBR5l4wZnWKhw&usqp=CAU"
                        alt="Imagen de perfil" 
                        className="rounded-circle mx-3"
                    />
                    <div className="d-flex flex-column">
                        <span>Nombre del canal</span>
                        <span> {numeral(1000).format("0.a")} Suscriptores </span>
                    </div>
                </div>
                <button className="btn border-0 p-2 m-2">Suscribirse</button>
            </div>
            <div className="videoMetaData__description">
                <ReactShowMoreText
                    lines={3}
                    more="Mostrar Más"
                    less="Mostrar Menos"
                    anchorClass="showMoreText"
                    expanded={false}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum dignissim enim, id varius nunc ullamcorper vel. Mauris convallis molestie nisi, non tincidunt metus convallis a. Nam et eros augue. Integer maximus ex a laoreet rutrum. Proin vehicula dapibus neque. Etiam euismod leo non nisi vestibulum, vitae interdum lectus auctor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum dignissim enim, id varius nunc ullamcorper vel. Mauris convallis molestie nisi, non tincidunt metus convallis a. Nam et eros augue. Integer maximus ex a laoreet rutrum. Proin vehicula dapibus neque. Etiam euismod leo non nisi vestibulum, vitae interdum lectus auctor.
                </ReactShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
