import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout/AuthLayout/Layout'
import RegisterView from './views/Auth/RegisterView'
import LoginView from './views/Auth/LoginView'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Layout/>}>
                    <Route path='/register' element={<RegisterView/>} index />
                    <Route path='/login' element={<LoginView/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}