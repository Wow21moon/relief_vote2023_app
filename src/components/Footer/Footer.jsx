import React from 'react'
import './Footer.css'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'





export const Footer = () => {

    const {onClose} = useTelegram()

  return (
    <div class="footer">
         <Button onClick={onClose}>Закрыть</Button>
    </div>
  )
}
