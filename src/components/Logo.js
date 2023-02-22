import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function Logo() {
  return (
    <Link to="/">
      <img style={logoStyle} src={logo} alt="logo"/>
    </Link>
  )
}
const logoStyle={
    width:'70px'
}
export default Logo