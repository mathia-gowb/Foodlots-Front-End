import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../auth/AuthContext';
import Logo from '../Logo';
/* jsx components */
import SearchBar from '../SearchBar';
/* styling components */
import { SolidHeaderWrapper } from './SolidHeader.styled';
const axios = require('axios').default;
axios.defaults.withCredentials = true;

function SolidHeader(props) {
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);

    function clickHandler(){
        axios.put('user/logout',{})
        .then((res)=>{
            setUser((prev)=>{
                return {...prev,loggedIn:false}
            })
            navigate('/')
        }).catch((error)=>{

        })
    }
    return (
        <SolidHeaderWrapper id="solid-header" >
            <nav className="solid-header-nav">
                <Logo/>
                
                {props.showSearch&&<SearchBar/>}
                {!props.isDemo&&<button className="logout-button" onClick={clickHandler}>Logout</button>}
            </nav>
        </SolidHeaderWrapper>
    )
}

export default SolidHeader