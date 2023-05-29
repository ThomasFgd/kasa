import './banner.css';

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={image} alt="Bannière" />
      <h2 className="banner-text">{text}</h2>
    </div>
  );
};
export default Banner;
