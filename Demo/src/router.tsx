import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RegisterView from './views/Auth/RegisterView'
import LoginView from './views/Auth/LoginView'
import AuthLayout from './Layout/AuthLayout/AuthLayout'
import Dashboard from './views/Dashboard'
import Layout from './Layout/Dashboard/Layout'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Layout/>}>
                    <Route path='/' element={<Dashboard/>} index />
                </Route>

                <Route element={<AuthLayout/>}>
                    <Route path='/register' element={<RegisterView/>} />
                    <Route path='/login' element={<LoginView/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}