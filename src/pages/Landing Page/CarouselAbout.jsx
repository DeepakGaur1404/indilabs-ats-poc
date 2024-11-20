import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselAbout({ aboutJsonData, numPage }) {
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
      {numPage == 1 &&
        aboutJsonData.map((each, index) => (
          <div
            key={index}
            className="bg-white h-[360px] w-[310px] rounded-[10px] gap-4 py-5 px-4 flex flex-col items-center justify-center shadow-lg"
          >
            <img
              src={each.cardImage}
              alt={each.heading}
              className="w-[48px] h-[48px] mt-12"
            />
            <p className="text-[#000000] font-['DM Sans'] font-[700] text-[24px] leading-8 text-center mt-4">
              {each.heading}
            </p>
            <p className="text-[#000000] font-['DM Sans'] font-[500] text-[16px] leading-[30px] tracking-wide w-[80%]  text-center">
              {each.description}
            </p>
          </div>
        ))}
      {numPage === 2 && (
        <div className=" flex gap-6 ">
          {aboutJsonData.slice(0, 2).map((each, index) => (
            <div
              key={index}
              className="bg-white h-[360px] sm:w-[320px] md:w-[384px] rounded-[10px] gap-4 py-5 px-4 flex flex-col items-center justify-center shadow-lg"
            >
              <img
                src={each.cardImage}
                alt={each.heading}
                className="w-[48px] h-[48px] mt-12"
              />
              <p className="text-[#000000] font-['DM Sans'] font-[700] text-[24px] leading-8 text-center mt-4">
                {each.heading}
              </p>
              <p className="text-[#000000] font-['DM Sans'] font-[500] text-[16px] leading-[30px] tracking-wide w-[80%]  text-center">
                {each.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {numPage === 2 && (
        <div className=" flex gap-6">
          {aboutJsonData.slice(2).map((each, index) => (
            <div
              key={index}
              className="bg-white h-[360px] sm:w-[320px] md:w-[384px]  rounded-[10px] gap-4 py-5 px-4 flex flex-col items-center justify-center shadow-lg"
            >
              <img
                src={each.cardImage}
                alt={each.heading}
                className="w-[48px] h-[48px] mt-12"
              />
              <p className="text-[#000000] font-['DM Sans'] font-[700] text-[24px] leading-8 text-center mt-4">
                {each.heading}
              </p>
              <p className="text-[#000000] font-['DM Sans'] font-[500] text-[16px] leading-[30px] tracking-wide w-[80%]  text-center">
                {each.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </Carousel>
  );
}
