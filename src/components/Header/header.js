import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo.png';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" className="logo"></img>
      <nav>
        <Link
          className={location.pathname === '/' ? 'lienActif' : 'lien'}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={location.pathname === '/a-propos' ? 'lienActif' : 'lien'}
          to="/a-propos"
        >
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
