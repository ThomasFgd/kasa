import { useParams } from 'react-router-dom';
import Logements from '../../assets/logements.json';
import './logement.css';
import Carrousel from '../../components/Carrousel/carrousel';
import Collapse from '../../components/Collapse/collapse';
import etoileRouge from '../../assets/etoile_rouge.png';
import etoileGrise from '../../assets/etoile_grise.png';

function Logement() {
  const { id } = useParams('id');
  const data = Logements.filter((item) => item.id === id)[0];
  const slides = [data.pictures];
  console.log(slides);

  return (
    <div className="main">
      <div className="carrousel">
        <Carrousel slides={slides[0]} />
      </div>
      <div className="content">
        <div className="enTete">
          <div>
            <h1>{data.title}</h1>
            <p>{data.location}</p>
          </div>
          <div>
            <div className="proprio">
              <p>{data.host.name}</p>
              <img src={data.host.picture} alt="Propriétaire" />
            </div>
          </div>
        </div>
        <div className="tagStar">
          <div className="tagGroup">
            {data.tags.map((tag, index) => {
              return (
                <p className="tag" key={index}>
                  {tag}
                </p>
              );
            })}
          </div>
          <div className="star">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <img
                  key={index}
                  src={index <= data.rating ? etoileRouge : etoileGrise}
                  alt={'Note'}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapseLogement">
        <div className="collapseInfo">
          <Collapse title={'Description'} content={data.description} />
        </div>
        <div className="collapseInfo">
          <Collapse title={'Équipements'} content={data.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Logement;
