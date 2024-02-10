import { CROUSEL_URL } from "../utils/constants";

const Crousel = ({ crouselCards }) => {
  return (
    <div className=" flex  overflow-x-auto scrollbar-hide  ">
      {crouselCards.map((card) => (
        <img
          key={card.id}
          className="w-40  z-30 mx-3"
          src={CROUSEL_URL + card.imageId}
        />
      ))}
    </div>
  );
};
export default Crousel;
