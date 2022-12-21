import Popup from "../Components/Popup";
import { useState } from "react";

const BottomContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <Popup isOpen={isOpen} closePopup={closePopup} />

      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-flow-row grid-cols-3 gap-8 py-6 min-h-[700px]	">
          <div className=" flex flex-col justify-center items-start col-span-1 text-left">
            <h2 className="text-4xl font-medium text-black-600 leading-loose mb-5">
              Buy <br />
              Dream Apartment <br />
              In <span className="text-blue-1">Prime Location</span>.
            </h2>

            <button className="py-6 px-12 col-span-2 text-white rounded-lg bg-blue-4 ">
              See All Apartment
            </button>
          </div>
          <div className="relative w-full col-span-2 ">
            <div className=" absolute top-0 left-0 -ml-4 z-0 ">
              <img src="/src/assets/images/Union 2.svg" />
            </div>
            <div className="absolute z-10 top-4 left-8">
              <img src="/src/assets/images/bottom.png" />
            </div>
            <div className=" absolute top-[55%] -left-28 lg:-left-10">
              <div className="relative w-[500px] h-full">
                <img
                  className="absolute top-0 left-0 h-80 z-10"
                  src="/src/assets/images/delux2.png"
                />
                <img
                  className="absolute  left-44 top-24 h-28 z-20 cursor-pointer"
                  src="/src/assets/images/play-button.svg"
                  onClick={() => openPopup()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomContainer;
