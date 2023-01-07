import { CiGlobe } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";

export function Profile() {
  return (
    <div className="flex items-center md:hidden">
      <a className="text-sm cursor-pointer capitalize hover:bg-gray-50 rounded-md py-[6px] px-3 font-bold text-gray-600">
        become a host
      </a>
      <a className="text-gray-600 p-2 mx-2 rounded-full hover:bg-gray-50 cursor-pointer ">
        <CiGlobe size={16} />
      </a>
      <div>
        <a className="flex px-3 py-[8px] cursor-pointer hover:shadow-md rounded-full border items-center border-gray-100 ">
          <HiOutlineMenu size={16} className="text-gray-600" />
          <svg
            className="ml-3 fill-gray-500 "
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            height={20}
            width={20}
          >
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
