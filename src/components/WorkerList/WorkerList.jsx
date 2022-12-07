import React, { useState } from 'react'
import { WorkerItem } from '../WorkerItem/WorkerItem'
import './WorkerList.css'

export const WorkerList = () => {

    const [activeVotes, setActiveVotes] = useState([])


    const changeVote = (worker, setClass) => {

        const alreadyVote = activeVotes.find(item => item.id === worker.id)

        let newItems = []

        if(alreadyVote) {
            newItems = activeVotes.filter(item => item.id !== worker.id)
            
        } else {
            if (activeVotes.length > 2) {
                setClass('disabled')
                setTimeout(function(){
                    setClass('')
                }, 1000)
                return
            }

            newItems = [...activeVotes, worker]
        }

        setActiveVotes(newItems)

    }

    console.log(activeVotes)

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
                    <WorkerItem worker={item} changeVote={changeVote} key={item.id} activeVotes={activeVotes}/>
                ))}
            </ul>
        </div>
    )
}
