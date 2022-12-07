import { useEffect } from 'react'
import './App.css'
import Button from './components/Button/Button'
import { Header } from './components/Header/Header'
import { WorkerList } from './components/WorkerList/WorkerList'

const tg = window.Telegram.WebApp

function App() {


    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return <div className="App">
        <Header />
        <WorkerList />
        <Button onClick={onClose}>Закрыть</Button>
    </div>
}

export default App
