import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";

export const Stars = ({ rating }) => {
  const starsArray = [];

  const FullStar = () => (
    <span className="text-yellow-500">
      <ImStarFull />
    </span>
  );
  const HalfStar = () => (
    <span className="text-yellow-500">
      <ImStarHalf />
    </span>
  );
  const EmptyStar = () => (
    <span className="text-yellow-500">
      <ImStarEmpty />
    </span>
  );
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      starsArray.push(<FullStar key={i} />);
    } else if (rating >= i - 0.5) {
      starsArray.push(<HalfStar key={i} />);
    } else {
      starsArray.push(<EmptyStar key={i} />);
    }
  }
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">{starsArray}</div>{" "}
      <p className=" text-gray-500 text-sm">(88)</p>
    </div>
  );
};
