import React from 'react'
import {Helmet} from 'react-helmet'
function Page404() {
  return (
 
    <main class="page-404 full-screen-div">
    <Helmet>
      <title>404 | Page not found</title>
    </Helmet> 
    <div class="overlay">
    </div>
        <h1 style={{color:'#edeec9',padding:'0 8px'}}>PAGE NOT FOUND</h1>
        <p style={{color:'white',padding:'10px 20px',textAlign:'center'}}>The page you are looking for doesn't exist or has been moved</p>
    </main>
  )
}

export default Page404