import React from 'react'
import './_videoHorizontal.scss'
import { Row, Col } from 'react-bootstrap'

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const VideoHorizontal = () => {
    return (
        <Row className="videoHorizontal m-1 py-2 align-items-center">
            <Col xs={6} md={4} className="videoHorizontal__left">
                <LazyLoadImage src={medium.url} effect="blur" />
                <span className="video__top__duration">{_duration}</span>
            </Col>

            <Col xs={6} md={8} className="videoHorizontal__right">
            
            </Col>
        </Row>
    )
}

export default VideoHorizontal
