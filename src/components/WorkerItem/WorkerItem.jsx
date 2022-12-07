import React, { useEffect, useState } from 'react'
import './WorkerItem.css'

export const WorkerItem = ({ worker, changeVote, activeVotes }) => {
    

    useEffect(() => {
        const activeClass = activeVotes.find(item => item.id === worker.id)

        console.log('activeClass', activeClass)

        if(activeClass) {
            setClassActive('active')
        } else {
            setClassActive('')
        }

    }, [activeVotes, worker])

    const [classActive, setClassActive] = useState(true)

    const onAddHandler = () => {
        changeVote(worker, setClassActive)
    }



    return (
        <div className={'worker ' + classActive} onClick={onAddHandler}>
            <img
                src="images/check.svg"
                alt="check"
                className={'worker__check'}
            />
            <img
                src={worker.photo_link}
                alt={worker.name}
                className={'worker__photo'}
            />
            <div className="worker__name">{worker.name}</div>
        </div>
    )
}
