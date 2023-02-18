import { PanelHeader, PanelHeaderBack, PanelHeaderClose } from '@vkontakte/vkui'
import React from 'react'
import Change from '../Change/Change'
import Foter from '../Footer/Foter'
import MainSection from '../MainSection/MainSection'

const Home = () => {
    return (
        <div>
            <Foter />
            <MainSection />
            <Change />
        </div>
    )
}

export default Home