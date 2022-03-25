import React from "react";
import Locations from "../../Components/Locations/Locations";
import "./Promotionaltour.css";
import images from "../../assets/assets";

const Place = [
  {
    image: images.beijing,
    text: "Beijing",
  },
  {
    image: images.turkey,
    text: "Turkey",
  },
  {
    image: images.pakistan,
    text: "Pakistan",
  },
];

const Promotionaltour = ({ theme }) => {
  return (
    <div>
      <div className="Promotionaltour__container flex__container-v">
        <div className="Promotionaltour__heading">
          <div className="p__heading">
            <p>
              <span style={{ color: theme.lifeJourney }}>Check Our Best</span>{" "}
              Promotional Tour
            </p>
          </div>
        </div>
        <div className="Promotionaltour__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          repudiandae reiciendis. Reiciendis eligendi voluptate ipsam molestias
          ipsa, voluptas iste atque molestiae, totam voluptatum laboriosam!
          Nostrum nesciunt dolorem dolores cumque alias inventore reprehenderit
        </div>
        <div className="Promotionaltour__locations flex__container">
          <Locations Place={Place[0]} />
          <Locations Place={Place[1]} />
          <Locations Place={Place[2]} />
        </div>
      </div>
    </div>
  );
};

export default Promotionaltour;
