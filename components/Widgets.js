import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import Image from 'next/image';
import TimeAgo from 'timeago-react';
import { MdLibraryAdd } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import AddIcon from '@mui/icons-material/Add';
import {
  HiArrowNarrowRight,
  HiChevronRight,
  HiChevronDown,
} from 'react-icons/hi';
import { BsCalendar3, BsThreeDots, BsCardImage } from 'react-icons/bs';

function Widgets({ articles }) {
  return (
    <div className="hidden xl:inline space-y-2 sticky top-[0px]">
      {/* Feed top section */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg flex flex-col pt-4 mb-2">
        {/* Add your feed */}
        <div className="flex items-center justify-between text-green-700 dark:text-white/75">
          <p className="text-left font-semibold cursor-pointer px-4">
            Follow co-HustleHubites
          </p>
          <MdLibraryAdd
            size={20}
            className="mx-4 text-green-700 cursor-pointer dark:text-white/75"
          />
        </div>
        {/* Feed1 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex">
            <img
              src="/ACCESS-BANK-LOGO.png"
              alt=""
              className="h-[55px] rounded-[150px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px] dark:text-white/75 cursor-pointer ">
                  <span className="">Access Bank Plc</span>
                </p>
                {/* Title */}
                <p className="font-normal dark:text-white/75 text-gray-600 text-[12px] cursor-pointer mb-2">
                  Company • Financial Services
                </p>
                {/* Follow + */}
                <div className="flex items-center justify-center outline outline-[1.5px] outline-gray-600 px-3 py-1 rounded-[20px]  hover:bg-gray-600/10 hover:outline-[2px] transition-all duration-100 ease-in-out">
                  <AddIcon
                    sx={{ fontSize: 20 }}
                    className="text-gray-600 cursor-pointer dark:text-white/75"
                  />
                  <p className="font-semibold dark:text-white/75 text-gray-600 text-[14px] cursor-pointer mr-1 ">
                    Follow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feed2 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex">
            <img
              src="/me.png"
              alt=""
              className="h-[55px] rounded-[150px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold dark:text-white/75 text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="">Ifeanyi Umeh</span>
                </p>
                {/* Title */}
                <p className="font-normal dark:text-white/75 text-gray-600 text-[12px] cursor-pointer mb-2">
                  Front-end Developer | UI Designer
                </p>
                {/* Follow + */}
                <div className="flex items-center justify-center outline outline-[1.5px] outline-gray-600 px-3 py-1 rounded-[20px]  hover:bg-gray-600/10 hover:outline-[2px] transition-all duration-100 ease-in-out">
                  <AddIcon
                    sx={{ fontSize: 20 }}
                    className="text-gray-600 dark:text-white/75 cursor-pointer"
                  />
                  <p className="font-semibold dark:text-white/75 text-gray-600 text-[14px] cursor-pointer mr-1 ">
                    Follow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feed3 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex">
            <img
              src="/kfclogo.png"
              alt=""
              className="h-[55px] rounded-[100px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold dark:text-white/75 text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="">KFC Nigeria</span>
                </p>
                {/* Title */}
                <p className="font-normal dark:text-white/75 text-gray-600 text-[12px] cursor-pointer mb-2">
                  Company • Food Services
                </p>
                {/* Follow + */}
                <div className="flex items-center justify-center outline outline-[1.5px] outline-gray-600 px-3 py-1 rounded-[20px]  hover:bg-gray-600/10 hover:outline-[2px] transition-all duration-100 ease-in-out">
                  <AddIcon
                    sx={{ fontSize: 20 }}
                    className="text-gray-600 dark:text-white/75 cursor-pointer"
                  />
                  <p className="font-semibold dark:text-white/75 text-gray-600 text-[14px] cursor-pointer mr-1 ">
                    Follow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* View recommendations */}
        <div className="flex items-center hover:bg-gray-700/10 dark:hover:bg-black/20 cursor-pointer">
          <p className="text-left text-gray-500 dark:text-white/75 font-semibold text-[14px] pl-4">
            View all recommendations
          </p>
          <HiArrowNarrowRight
            size={20}
            className="ml-1 mb-3 mt-4 text-gray-500 dark:text-white/75 cursor-pointer"
          />
        </div>
      </div>

      {/* News */}
      <div className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between font-bold px-2.5 text-green-700 dark:text-white/75">
          <h4>Hustle News</h4>
          <InfoRoundedIcon className="h-5 w-5" />
        </div>

        <div className="space-y-1">
          {articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1"
            >
              <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center pt-4 pb-[50px] ">
        {/* line1 */}
        <div className="flex mb-[5px]">
          <p className="text-gray-500 dark:text-white/75 text-[12px] cursor-pointer mr-5 hover:underline decoration-green-700 hover:text-green-700">
            About
          </p>
          <p className="text-gray-500 dark:text-white/75 text-[12px] mr-5 cursor-pointer mr-5 hover:underline decoration-green-700 hover:text-green-700">
            Accessibility
          </p>
          <p className="text-gray-500 dark:text-white/75 text-[12px] cursor-pointer mr-5 hover:underline decoration-green-700 hover:text-green-700">
            Help Center
          </p>
        </div>
        {/* line2 */}
        <div className="flex mb-[5px]">
          <div className="flex mr-5">
            <p className="text-gray-500 dark:text-white/75 text-[12px]  cursor-pointer hover:underline decoration-green-700 hover:text-green-700">
              Privacy & Terms
            </p>
            <HiChevronDown
              size={20}
              className="text-gray-500 dark:text-white/75 cursor-pointer hover:underline decoration-green-700 hover:text-green-700"
            />
          </div>
          <p className="text-gray-500 dark:text-white/75 text-[12px] cursor-pointer mr-5 hover:underline decoration-green-700 hover:text-green-700">
            Ad Choices
          </p>
        </div>
        {/* line3 */}
        <div className="flex mb-[5px]">
          <div className="flex mr-5">
            <p className="text-gray-500 dark:text-white/75 text-[12px] cursor-pointer mr-5 hover:underline decoration-green-700 hover:text-green-700">
              Advertising
            </p>
            <p className="text-gray-500 dark:text-white/75 text-[12px]  cursor-pointer hover:underline decoration-green-700 hover:text-green-700">
              Business Services
            </p>
            <HiChevronDown
              size={20}
              className="text-gray-500 dark:text-white/75 cursor-pointer hover:underline decoration-green-700 hover:text-green-700"
            />
          </div>
        </div>
        {/* line4 */}
        <div className="flex mb-[20px]">
          <p className="text-gray-500 dark:text-white/75 text-[12px] mr-5 cursor-pointer mr-5 hover:underline decoration-green-700 hover:text-green-700">
            Get the HustleHub app
          </p>
          <p className="text-gray-500 dark:text-white/75 text-[12px] cursor-pointer mr-5 hover:underline decoration-green-700 hover:text-green-700">
            More
          </p>
        </div>
        {/* copyright line */}
        <div className="flex mr-5 items-center">
          <img
            src="/hustle_hub_logo_footer.svg"
            alt=""
            className="h-[15px] rounded-[] mr-1 cursor-pointer"
          />
          <p className="text-gray-500 dark:text-white/75 text-[12px] font-semibold cursor-pointer">
            © 2022 - Ifeanyi Umeh
          </p>
        </div>
      </div>

      {/* Ads */}
      {/* <div className="bg-white dark:bg-[#1D2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300 dark:border-none">
        <div className="relative w-full h-full">
          <Image
            src="https://rb.gy/kbfeaa"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div> */}
    </div>
  );
}

export default Widgets;
