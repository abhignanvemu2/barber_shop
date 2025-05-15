import { Card } from "../components/ui/card";

const ReviewCard = ({ heading, about, image }) => {
  return (
    <Card className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden w-80 h-96 transition-transform duration-300 hover:scale-105 hover:border-1 hover:border-[#E1F11F]">
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black hover:bg-transparent opacity-50" />

        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#333333] bg-opacity-90 h-[45%] p-5">
          <h2 className="text-xl font-semibold text-left  text-primary">
            {heading}
          </h2>
          <p className="mt-2 text-white text-left text-sm">{about}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
