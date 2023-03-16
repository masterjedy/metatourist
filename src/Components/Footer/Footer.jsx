import React from 'react'
import images from '../../assets/images'
import './index.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <img className='footer__logo' src={images.Logo} alt="Logo" />
            <p className='text'>МЕТА ТУРИСТ</p>
        </div>
    )
}

export default Footer