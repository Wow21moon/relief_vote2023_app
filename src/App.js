import { useEffect } from 'react'
import './App.css'
import Button from './components/Button/Button'

const tg = window.Telegram.WebApp

function App() {


    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return <div className="App">
        <Button onClick={onClose}>Закрыть</Button>
    </div>
}

export default App
