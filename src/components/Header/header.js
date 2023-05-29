import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" className="logo"></img>
      <nav>
        <Link className="lien" to="/">
          Accueil
        </Link>
        <Link className="lien" to="/a-propos">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
