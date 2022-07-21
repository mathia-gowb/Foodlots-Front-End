import{useState}from 'react'
import { Outlet } from 'react-router-dom';
import RefreshTopBarContext from '../contexts/RefreshTopBarContext';
import {Helmet} from 'react-helmet'

function DashboardParent() {
  const [refreshView,setRefreshView] = useState(false);
  return (
    <RefreshTopBarContext.Provider value={{refreshView,setRefreshView}}>
      <Helmet>
        <title>Foodlots | Dashboard</title>
      </Helmet>
      <Outlet></Outlet>
    </RefreshTopBarContext.Provider>
  )
}

export default DashboardParent