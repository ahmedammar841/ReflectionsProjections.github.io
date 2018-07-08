import React, { Component } from 'react'
import { } from 'react-bootstrap'
import styles from './styles.scss'
import Navigation from './navigation/navigation'
import Start from './start/start'
import About from './about/about'
import Events from './events/events'
import Speakers from './speakers/speakers'
import Tracks from './tracks/tracks'
import Sponsors from './sponsors/sponsors'
import Footer from './footer/footer'
import Photos from './photos/photos'
import Social from './social/social'


class Home extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="Home">
                <Navigation />
                <Start />
                <About />
                <Speakers />
                <Sponsors />
                <Social />
                <Footer />
            </div>
        )
    }
}

export default Home
