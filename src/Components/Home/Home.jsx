import { PanelHeader, PanelHeaderBack, PanelHeaderClose } from '@vkontakte/vkui'
import React from 'react'
import Change from '../Change/Change'
import Footer from '../Footer/Footer'
import MainSection from '../MainSection/MainSection'

const Home = () => {
    return (
        <div>
            <Footer />
            <MainSection />
            <Change />
        </div>
    )
}

export default Home