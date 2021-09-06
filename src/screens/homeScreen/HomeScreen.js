import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { getPopularVideos } from '../../redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch]);

    const { videos } = useSelector(state => state.homeVideos);

    const fetchData = () => {
        // logic
    }

    return (
        <Container>
            <CategoriesBar />
           
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                className="row">
                    { videos.map( video => (
                        <Col lg={3} md={4} key={video.id}>
                            <Video video={video} />
                        </Col>
                    ) )}
                </InfiniteScroll>
          
        </Container>
    )
}

export default HomeScreen
