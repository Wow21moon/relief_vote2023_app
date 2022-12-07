import React from 'react'
import { WorkerItem } from '../WorkerItem/WorkerItem'
import './WorkerList.css'

export const WorkerList = () => {
    const data = [
        { name: 'Иван Сергеев', photo_link: 'images/ivan.jpg', id: '1' },
        { name: 'Алексей Иванов', photo_link: 'images/alexei.jpg', id: '2' },
        { name: 'Богдан Петров', photo_link: 'images/bogdan.jpg', id: '3' },
        { name: 'Мария Алексеева', photo_link: 'images/maria.jpg', id: '4' },
        { name: 'Сергей Рыбин', photo_link: 'images/sergei.jpg', id: '5' },
        { name: 'Наталья Артемова', photo_link: 'images/natalie.jpg', id: '6' },
    ]

    return (
        <div className="worker-list__wrapper">
            <ul className="worker-list__container">
                {data.map((item) => (
                    <WorkerItem worker={item}/>
                ))}
            </ul>
        </div>
    )
}
