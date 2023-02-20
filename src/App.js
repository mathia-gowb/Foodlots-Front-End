import './App.css';
import './styles/auth-pages.css';
import './styles/index.css';
import './styles/main.css';

import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import UserContext from './auth/AuthContext';
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import VerificationNotice from './pages/VerificationNotice';
import VerifyEmail from './pages/VerifyEmail';
import SingleRecipe from './pages/SingleRecipe';
import { RequireAuth } from './components/RequireAuth';
import DashboardParent from './components/DashboardParent';
import Page404 from './pages/404';
import ResetPassword from './pages/ResetPassword';
import PasswordResetTokenised from './pages/PasswordResetTokenised';
/* import theme file */
import { theme } from './styles/Theme';
import { ThemeProvider } from 'styled-components';
const axios = require('axios').default;
axios.defaults.baseURL='https://foodlots.herokuapp.com/'
axios.defaults.withCredentials=true;

function App() {

  const userSchema = {
    loggedIn:false,
    isDemo:true,
    likedRecipes:[],
    savedRecipes:[]
  }
  const [user,setUser]=useState(userSchema);
  useEffect(()=>{
    //try to get current user
    axios.get('user')
    .then((res)=>{
      //if user found set the login status to true
      if(res.data.status==='SUCCESSFUL'){
        setUser((prev)=>{
          return {...prev,loggedIn:true}
        })
      } 
    }).catch((error)=>{
    })
  },[])
  return (
    <UserContext.Provider value={{user,setUser}}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title> FoodLots | Home </title>
        </Helmet>
        <Router>
            <Routes>
              {/* check login status and display landing page or videos page */}
              {/* <Route path='/' element={<LandingPage/>}/> */}
              <Route path='/' element={<RequireAuth><DashboardParent/></RequireAuth>}>
                <Route path='' element={<Dashboard/>}></Route>
                <Route path='recipe' element={<SingleRecipe/>}></Route>
              </Route>
              <Route path='/signup/verification-message/:email' element={<VerificationNotice/>}/>
              <Route path='/user/verify/:userId/:uniqueString' element={<VerifyEmail/>}/>
              <Route path='/user/reset-password/:userId/:uniqueString' element={<PasswordResetTokenised/>}/>
              <Route path='login' element={user.loggedIn?<Navigate to={'/'}/>:<Login/>}></Route>
              <Route path='signup' element={user.loggedIn?<Navigate to={'/'}/>:<SignUp/>}></Route>
              <Route path='reset' element={<ResetPassword/>}></Route>
              <Route path='demo' element={<DashboardParent/>}>
                <Route path='' element={<Dashboard/>}></Route>
                <Route path='recipe' element={<SingleRecipe/>}></Route>
              </Route>
              <Route path="*" element={<Page404/>}></Route>
            </Routes>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
