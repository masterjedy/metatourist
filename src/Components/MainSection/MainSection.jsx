import { Text } from '@vkontakte/vkui'
import React from 'react'
import images from '../../assets/images'
import './index.scss'

const MainSection = () => {
    return (
        <div className='main-section'>
            <Text className='slogan'>Путешествуй сам, с друзьями, с гидом</Text>
            <Text className='slogan-2'>Цифровые туры по метавселенным</Text>
            <div className='conteiner-section'>
                <img className='img__MainSection' src={images.MainSection} alt='MainSection' />
            </div>
        </div>
    )
}

export default MainSection