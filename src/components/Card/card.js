import { Link } from 'react-router-dom';
import './card.css';

function Card({ id, title, image }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;
