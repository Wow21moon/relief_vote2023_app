import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="header__title">Голосование</div>
            <div className="header__subheader">{`Здравствуйте пользователь `}</div>
        </div>
    )
}
