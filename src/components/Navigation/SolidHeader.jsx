import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../auth/AuthContext';
import Logo from '../Logo';
/* jsx components */
import SearchBar from '../Forms/SearchBar';
/* styling components */
import { SolidHeaderWrapper } from './SolidHeader.styled';
const axios = require('axios').default;
axios.defaults.withCredentials = true;

function SolidHeader(props) {
    const navigate = useNavigate();
    const [showSearch,setShowSearch] = useState(false);
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
            <nav className={`solid-header-nav ${showSearch?"search-active":""}`}>
                <Logo/>
                <div className="search-bar-container">
                    {props.showSearch&&<SearchBar/>}
                    <button className='close-button' onClick={()=>setShowSearch(false)}><i class="fas fa-times"></i></button>
                </div>
                <div className="activate-search">
                    <button className='activate-search_button'  onClick={()=>setShowSearch(true)}><i class="fas fa-search"></i></button>
                </div>
                {!props.isDemo&&<button className="logout-button" onClick={clickHandler}>Logout</button>}
            </nav>
        </SolidHeaderWrapper>
    )
}

export default SolidHeader