import { useEffect } from 'react'
import './App.css'
// import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { WorkerList } from './components/WorkerList/WorkerList'
import { useTelegram } from './hooks/useTelegram'



function App() {

    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])



    return <div className="App">
        <Header />
        <WorkerList />
        {/* <Footer /> */}
    </div>
}

export default App
