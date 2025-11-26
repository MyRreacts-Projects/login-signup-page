// all routes are defined here 
import {Routes,Route} from 'react-router-dom';
import Login from '../components/auth/login';
import SignUp from '../components/auth/signup';
const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    )
}
export default MyRoutes;