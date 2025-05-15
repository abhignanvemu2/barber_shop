import { Card } from "../components/ui/card";
import { CheckCircle } from "lucide-react";

const PricingCard = ({ heading, price, image, features }) => {
  return (
   <Card className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden w-80 h-96 transition-transform duration-300 hover:scale-105 hover:border-1 hover:border-[#1F67F1] dark:hover:border-[#E1F11F]">
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black hover:bg-transparent opacity-60" />

        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 bg-opacity-90 h-full p-5 big-shoulders">
          <h2 className="text-xl font-semibold text-left  text-white">
            {heading}
          </h2>
          <div className="flex flex-col">
            <h1 className="mt-2 text-primary text-left font-extrabold text-5xl">
              {price}
              <p className="text-sm text-gray-400">/mo</p>
            </h1>

            <ServiceList items={features} />

            <button className="cursor-pointer border-2 dark:hover:bg-[#E0F11F] hover:bg-[#1F67F1] hover:text-black text-white  rounded-lg md:w-auto px-2 py-1 text-lg dm-sans md:mx-1 font-medium transition-all w-50 duration-300 hover:scale-105 mt-4" onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

// components/ServiceList.jsx
const ServiceList = ({ items }) => {
  return (
    <ul className="dm-sans pt-10 text-lg tracking-wider space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-white text-left gap-2">
          <CheckCircle className="dark:text-[#E0F11F] text-primary w-5 h-5 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
export default PricingCard;
