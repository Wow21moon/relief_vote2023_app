import React, { useState } from 'react'
import './WorkerItem.css'

export const WorkerItem = ({ worker, changeVote }) => {
    
    const [classActive, setClassActive] = useState('')
    const [classDisabled, setClassDisabled] = useState('')

    // useEffect(() => {
    //     const activeClass = activeVotes.find(item => item.id === worker.id)

    //     if(activeClass) {
    //         setClassActive('active')
    //     } else {
    //         setClassActive('')
    //     }

    // }, [activeVotes, worker])


    const onAddHandler = () => {
        changeVote(worker, setClassActive, setClassDisabled)
    }



    return (
        <div className={'worker ' + classActive + classDisabled} onClick={onAddHandler}>
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
