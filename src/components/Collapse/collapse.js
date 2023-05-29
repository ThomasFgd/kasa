import { useState } from 'react';
import './collapse.css';
import fleche from '../../assets/fleche.png';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div>
        <h3 onClick={handleToggle} className="collapse_button">
          {title}
          <img src={fleche} alt="fleche" className="fleche"></img>
        </h3>
      </div>

      {isOpen && <p>{content}</p>}
    </div>
  );
}

export default Collapse;
