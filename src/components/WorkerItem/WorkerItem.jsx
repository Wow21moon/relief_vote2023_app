import React from 'react'
import './WorkerItem.css'

export const WorkerItem = ({worker}) => {
    

    return (
        <div className='worker'>
            <img src={worker.photo_link} alt="" />
            <div>{worker.name}</div>
            <div>{worker.id}</div>
        </div>
    )
}
