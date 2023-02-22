import { useContext,useEffect, useState } from 'react';
import {Navigate,useLocation} from 'react-router-dom';
import UserContext from '../auth/AuthContext';
import LandingPage from '../pages/LandingPage';

export function RequireAuth({children}) {

    const {user}=useContext(UserContext);
    const [componentToRender,setComponentToRender] = useState("")

    useEffect(() => {

        if(user.loaded){
            //check that the user is logged in
            if(user.loggedIn){
                setComponentToRender(children)
            }else{
                setComponentToRender(<Navigate to={'/demo'}/>)
            }
        }

    }, [user])
    
    /* if user not logged in navigate to /login else to child passed in the router */
    return componentToRender
}
