import React, { useState } from "react";
import img1 from "./../images/dummy_1.jpg";
import img2 from "./../images/dummy_2.jpg";
import img4 from "./../images/dummy_3.jpg";
import img3 from "./../images/dummy_4.jpg";
import { ResultCard } from "../utils";

const dummyResults = [
  {
    id: 1,
    image: img1,
    title: "Pin by Ána R. on L'été | Nature instagram, Nature photography...",
  },
  {
    id: 2,
    image: img2,
    title: "Nature photography",
  },
  {
    id: 3,
    image: img3,
    title: "Pin by Ána R. on L'été | Nature instagram, Nature photography...",
  },
  {
    id: 1,
    image: img4,
    title: "GuliriFei Women's Two Piece...",
    source: "Amazon.com",
  },
  {
    id: 2,
    image: img4,
    title: "Buy Trendyol Striped Cotton Top...",
  },
  {
    id: 3,
    image: img3,
    title: "Purple Knit Summer Top...",
  },
  {
    id: 1,
    image: img4,
    title: "GuliriFei Women's Two Piece...",
  },
];

const SearchResultUI = ({ handleAction }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="flex flex-col items-center lg:items-start w-full">
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:max-w-full lg:w-full md:max-w-[576px] text-white">
        <div className="flex w-full mb-4 mt-2 md:mt-5 max-md:max-w-[576px] items-center px-4 gap-4 text-sm border-b lg:px-8 md:gap-6 border-gray-700">
          {["All", "Images", "Maps", "Videos", "News", "Books"].map(
            (tab, index) => (
              <div
                key={tab}
                onClick={() => setActiveTab(index)}
                className={` hover:text-white pb-1 cursor-pointer ${
                  activeTab === index
                    ? "text-white border-b-2 border-b-white"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </div>
            )
          )}
        </div>
        <section className="lg:px-7">
          <div className="px-4 max-md:max-w-[576px] lg:max-w-[652px] justify-start py-2 md:px-0 flex gap-2 lg:gap-4">
            <ResultCard
              item={dummyResults[0]}
              className="h-[400px] md:h-[437px]"
            />
            <div>
              {dummyResults.slice(1, 3).map((item) => (
                <ResultCard item={item} className="h-[185px] md:h-[200px]" />
              ))}
            </div>
          </div>
          <div className="px-4 max-md:max-w-[576px] md:w-full lg:max-w-[652px] justify-start py-2 md:px-0 flex gap-2 lg:gap-4">
            <ResultCard
              item={dummyResults[3]}
              className="h-[400px] md:h-[437px]"
              width="w-6/12"
            />
            <div className="w-6/12">
              {dummyResults.slice(4, 6).map((item) => (
                <ResultCard item={item} className="h-[185px] md:h-[200px]" />
              ))}
            </div>
          </div>
        </section>
        <div className="px-4 py-5 mt-3 text-sm max-md:max-w-[576px] w-full justify-center items-center flex flex-col text-gray-400 border-t border-gray-700">
          Are these results useful?
          <div className="mt-2 flex gap-3">
            <button className="px-3 py-1 bg-[#303134] rounded text-white hover:bg-gray-700">
              Yes
            </button>
            <button
              onClick={handleAction}
              className="px-3 py-1 bg-[#303134] rounded text-white hover:bg-gray-700"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultUI;
