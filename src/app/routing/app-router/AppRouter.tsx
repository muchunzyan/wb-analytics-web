import {Route, Routes} from "react-router-dom"
import Instructions from "@/pages/instructions"
import Auth from "@/pages/auth"

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route path='/instructions' element={<Instructions/>}/>
        </Routes>
    )
}

export default AppRouter