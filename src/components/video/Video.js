import React from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/xXE4tfrPB2A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&amp;rs=AOn4CLBfCVJ3znPobXeQ3l_Jfg3W1BeVyA" alt="" />
                <span>07:30</span>
            </div>
            <div className="video__title">
                Tendencias Música 2021
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 15m vistas • 
                </span>
                <span> hace 10 días</span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/PovCcIPhkm7pfbiC2gW4WfumIzxbFMmVlW6RAZAs_txFtru5jm5_JHE-rXpgyd8E356Mt3nn=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Music For All</p>
            </div>
        </div>
    )
}

export default Video
