import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
import Home from './../../Pages/Home/Home';
import Login from './../../Pages/Login/Login';
import SignUp from './../../Pages/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    } 
])

export default router;