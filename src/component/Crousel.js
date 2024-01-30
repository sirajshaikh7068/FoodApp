import { Link } from "react-router-dom";
import { CROUSEL_URL } from "../utils/constants";

const Crousel = ({ crouselCards }) => {
  return (
    <div className=" flex  overflow-y-auto overflow-visible ">
      {crouselCards.map((card, index) => {
        return (
          <div className="card-container bg-slate-600 flex " key={index}>
            <Link to="/">
              <img
                className="crousel-image size-40  "
                src={CROUSEL_URL + card?.imageId}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Crousel;
