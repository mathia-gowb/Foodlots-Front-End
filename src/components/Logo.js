import logo from '../assets/images/logo.png'

function Logo() {
  return (
    <img style={logoStyle} src={logo}/>
  )
}
const logoStyle={
    width:'70px'
}
export default Logo