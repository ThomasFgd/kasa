import banner from '../../assets/banner_home.jpg';
import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import Logements from '../../assets/logements.json';
import './home.css';

function Home() {
  return (
    <div>
      <Banner image={banner} text="Chez vous, partout et ailleurs" />
      <div className="center">
        <div className="gallery">
          {Logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              image={logement.cover}
              title={logement.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
