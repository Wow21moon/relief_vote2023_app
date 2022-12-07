import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'

export const Header = () => {

    const {user} = useTelegram()

    return (
        <div className="header">
            <div className="header__title">Голосование</div>
            <div className="header__subheader">{`Здравствуйте пользователь ${user?.username}`}</div>
        </div>
    )
}
