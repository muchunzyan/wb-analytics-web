import './styles'
import {BrowserRouter} from 'react-router-dom'
import Navigation from '@/widgets/navigation'
import AppRouter from "@/app/routing/router"

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
