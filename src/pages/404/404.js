import { Link } from 'react-router-dom';
import './404.css';

function Error() {
  return (
    <div className="error">
      <h1 className="error404"> 404 </h1>
      <h2 className="oups">Oups ! La page que vous demandez n'existe pas.</h2>
      <Link className="retour" to="/">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
}

export default Error;
