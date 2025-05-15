import { Card } from "../components/ui/card";

const BarberCard = ({ heading, about, image }) => {
  return (
    <Card className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden w-80 h-96 transition-transform duration-300 hover:scale-105 hover:border-1 hover:border-[#E1F11F]">
      <div
        className="h-96 w-full bg-cover bg-center relative group"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300" />

        {/* Static Heading */}
        <div className=" bg-opacity-90  p-5 flex flex-col justify-end">
          <h2 className="text-2xl font-bold text-left text-primary uppercase">
            {heading}
          </h2>

          {/* About text on hover */}
          <p className="mt-2 text-gray-200 font-medium text-left text-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
            {about}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BarberCard;
