import './banner.css';
import { useLocation } from 'react-router-dom';

const Banner = ({ image, text }) => {
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === '/a-propos' ? 'banner-a-propos' : 'banner'
      }
    >
      <img className="banner-img" src={image} alt="Bannière" />
      <h2 className="banner-text">{text}</h2>
    </div>
  );
};
export default Banner;
