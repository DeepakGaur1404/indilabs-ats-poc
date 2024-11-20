import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselDefault({ dataCards, numPage }) {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="red"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={6}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="red"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={6}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {numPage === 1 &&
        dataCards.map((item, index) => (
          <div
            key={index}
            className="w-[330px] h-[390px] bg-white rounded-[10px] overflow-hidden flex flex-col items-center shadow-xl"
          >
            <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2
              className="w-full text-center font-['DM Sans'] font-[700] text-[20px] p-2 border-l border-r text-[#000000]"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h2>
            <p
              className="w-full flex-grow p-2  font-['DM Sans'] font-[400] text-[14px] text-[#000000] text-center"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        ))}

      {numPage === 2 && (
        <div className=" flex gap-4 ">
          {dataCards.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="w-[320px] h-[380px] bg-white rounded-[10px] overflow-hidden flex flex-col items-center shadow-xl"
            >
              <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className="w-full text-center font-['DM Sans'] font-[700] text-[20px] p-2 border-l border-r text-[#000000]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h2>
              <p
                className="w-full flex-grow p-2  font-['DM Sans'] font-[400] text-[14px] text-[#000000] text-center"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>
      )}

      {numPage === 2 && (
        <div className=" flex gap-4 ">
          {dataCards.slice(2).map((item, index) => (
            <div
              key={index}
              className="w-[320px] h-[380px] bg-white rounded-[10px] overflow-hidden flex flex-col items-center shadow-xl"
            >
              <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className="w-full text-center font-['DM Sans'] font-[700] text-[20px] p-2 border-l border-r text-[#000000]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h2>
              <p
                className="w-full flex-grow p-2  font-['DM Sans'] font-[400] text-[14px] text-[#000000] text-center"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>
      )}
    </Carousel>
  );
}
