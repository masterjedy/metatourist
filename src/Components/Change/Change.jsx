import { CellButton, Text } from '@vkontakte/vkui'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import './Change.scss'

const Change = () => {
  return (
    <div className='change'>
      <div className='change-main'>
        <img className='img-globus' src={images.Globus} alt='Globus' />
        <p className='change-tour'>Выбор тура</p>
      </div>
      <p className='change-change'>Укажите каким образом хотите осуществить путешествие по метавселенным</p>
      { /* <button className='btn-1'>Сам</button>
      <button className='btn-2'><a>С другом</a></button>
  <button className='btn-3'><a>С гидом</a></button> */ }
      { /*<CellButton className='btn-1'>Сам</CellButton>
      <CellButton className='btn-2'>С другом</CellButton>
<CellButton className='btn-3'>С гидом</CellButton> */ }
    </div>
  )
}

export default Change