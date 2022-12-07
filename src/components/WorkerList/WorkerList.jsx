import React, { useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { WorkerItem } from '../WorkerItem/WorkerItem'
import './WorkerList.css'

export const WorkerList = () => {

    const [activeVotes, setActiveVotes] = useState([])
    const [animationCount, setAnimationCount] = useState('')

    const {tg} = useTelegram()

    const changeVote = (worker, setClassActive, setClassDisabled) => {

        const alreadyVote = activeVotes.find(item => item.id === worker.id)

        let newItems = []

        if(alreadyVote) {
            newItems = activeVotes.filter(item => item.id !== worker.id)
            setClassActive('')
        } else {
            if (activeVotes.length > 2) {
                    setClassDisabled(
                        'disabled'
                    )
                    setAnimationCount('disabled')
                
                setTimeout(function () {
                    setClassDisabled('')
                    setAnimationCount('')
                }, 1500)


                return
            }

            newItems = [...activeVotes, worker]
            setClassActive('active')
        }

        setActiveVotes(newItems)

        if(newItems.length === 3) {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: 'Проголосовать'
            })
        } else {
            tg.MainButton.hide()
        }

    }

    console.log(activeVotes)

    const data = [
        { name: 'Иван Сергеев', photo_link: 'images/ivan.jpg', id: '1' },
        { name: 'Алексей Иванов', photo_link: 'images/alexei.jpg', id: '2' },
        { name: 'Богдан Петров', photo_link: 'images/bogdan.jpg', id: '3' },
        { name: 'Мария Алексеева', photo_link: 'images/maria.jpg', id: '4' },
        { name: 'Сергей Рыбин', photo_link: 'images/sergei.jpg', id: '5' },
        { name: 'Наталья Артемова', photo_link: 'images/natalie.jpg', id: '6' },
        { name: 'Иван Сергеев', photo_link: 'images/ivan.jpg', id: '7' },
        { name: 'Алексей Иванов', photo_link: 'images/alexei.jpg', id: '8' },
        { name: 'Богдан Петров', photo_link: 'images/bogdan.jpg', id: '9' },
        { name: 'Мария Алексеева', photo_link: 'images/maria.jpg', id: '10' },
        { name: 'Сергей Рыбин', photo_link: 'images/sergei.jpg', id: '11' },
        { name: 'Наталья Артемова', photo_link: 'images/natalie.jpg', id: '12' },
    ]



    return (
        <div className="worker-list__wrapper">
            <ul className="worker-list__container">
                {data.map((item) => (
                    <WorkerItem worker={item} changeVote={changeVote} key={item.id}  />
                ))}
            </ul>
            {activeVotes.length > 0 ?
            <div className={'worker-list__count-vote ' + animationCount}>{`Количество Ваших голосов ${activeVotes.length}/3`}</div> : null}

        </div>
    )
}
