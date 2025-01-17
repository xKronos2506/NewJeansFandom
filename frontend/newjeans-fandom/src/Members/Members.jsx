// Import libraries and modules
import { useState } from "react";
import { motion } from "framer-motion";
import './members.css';

// Import images for photocard effect
import Backside_Danielle from '../../assets/Photocards/danielle-backside.jpg';
import Frontside_Danielle from '../../assets/Photocards/danielle-frontside.jpg';
import Backside_Hanni from '../../assets/Photocards/hanni-backside.jpg';
import Frontside_Hanni from '../../assets/Photocards/hanni-frontside.jpg';
import Backside_Haerin from '../../assets/Photocards/haerin-backside.jpg';
import Frontside_Haerin from '../../assets/Photocards/haerin-frontside.jpg';
import Backside_Minji from '../../assets/Photocards/minji-backside.jpg';
import Frontside_Minji from '../../assets/Photocards/minji-frontside.jpg';
import Backside_Hyein from '../../assets/Photocards/hyein-backside.jpg';
import Frontside_Hyein from '../../assets/Photocards/hyein-frontside.jpg';

const Members = () => {
  const [flippedCards, setFlippedCards] = useState({});

  // Function to create the flipping effect
  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Data array for member details and photocard variables (frontside and backside images)
  const members = [
    { name: "Danielle Marsh (모지혜)", nationality: "South Korea, Australia", back: Backside_Danielle, front: Frontside_Danielle },
    { name: "Hanni Pham (Phạm Ngọc Hân)", nationality: "Vietnamese/Australian", back: Backside_Hanni, front: Frontside_Hanni },
    { name: "Kang Hae-rin (강해린)", nationality: "South Korea", back: Backside_Haerin, front: Frontside_Haerin },
    { name: "Kim Min-ji (김민지)", nationality: "South Korea", back: Backside_Minji, front: Frontside_Minji },
    { name: "Lee Hye-in (이혜인)", nationality: "South Korea", back: Backside_Hyein, front: Frontside_Hyein },
  ];

  return (
    <div className="members">
      <div className="members-container">
        {members.map((member, index) => (
          <div
            key={index}
            className="flip-card"
            onClick={() => handleFlip(index)}
          >
            <motion.div
              className="flip-card-inner w-full h-full relative"
              initial={false}
              animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="flip-card-front w-full h-full absolute backface-hidden bg-cover rounded-lg"
                style={{ backgroundImage: `url(${member.back})` }}
              ></div>
              <div
                className="flip-card-back w-full h-full absolute backface-hidden bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${member.front})`,
                  transform: 'rotateY(180deg)'
                }}
              >
                {flippedCards[index] && (
                  <div className="card-text">
                    <h1>Name: {member.name}</h1>
                    <h2>Nationality: {member.nationality}</h2>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;