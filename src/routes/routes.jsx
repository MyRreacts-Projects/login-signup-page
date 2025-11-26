// all routes are defined here 
import {Routes,Route} from 'react-router-dom';
import Login from '../components/auth/login';
import SignUp from '../components/auth/signup';
import Home from '../components/home/home';
const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}
export default MyRoutes;