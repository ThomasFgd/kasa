import { useState } from 'react';
import './collapse.css';
import fleche from '../../assets/fleche.png';
import flecheHaut from '../../assets/fleche-haut.png';
import { useLocation } from 'react-router-dom';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <p className="list" key={index}>
          {item}
        </p>
      ));
    } else {
      return <p className="content">{content}</p>;
    }
  };

  return (
    <div
      className={location.pathname === '/a-propos' ? 'collapse' : 'collapse100'}
    >
      <div>
        <h3 onClick={handleToggle} className="collapse_button">
          {title}
          <img
            src={isOpen ? flecheHaut : fleche}
            alt="fleche"
            className="fleche"
          ></img>
        </h3>
      </div>
      <div className={isOpen ? 'containerOpen' : 'container'}>
        {isOpen && renderContent()}
      </div>
    </div>
  );
}

export default Collapse;
