import logo from '../../assets/logo_white.png'
import './footer.css'

function Footer() {
    return(
        <footer>
            <img src={logo} alt='Logo Kasa - Bas de page' className='logo-footer'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer