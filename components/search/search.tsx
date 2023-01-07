import { FiSearch } from "react-icons/fi";

export function SearchLocation() {
  return (
    <div>
      <div className=" flex items-center border border-gray-200 shadow-sm px-3 py-2 rounded-full ">
        <div className=" md:block font-semibold text-gray-600">
          <div className="md:flex">
            <a className="md:text-xs md:font-light  md:text-gray-400 px-3 border-r mx-3 cursor-pointer border-gray-200 text-sm font-semibold text-gray-600">
              Anywhere
            </a>

            <a className="md:text-xs md:font-light md:px-1 md:text-gray-400 px-3 border-r cursor-pointer mx-3 border-gray-200 text-sm font-semibold text-gray-600">
              Any week
            </a>
            <a className="md:text-xs md:font-light  cursor-pointer text-sm font-semibold text-gray-400">
              Add Guests
            </a>
          </div>
        </div>
        <div className="ml-4">
          <a className="bg-slate-800 cursor-pointer h-8 w-8 rounded-full justify-center flex items-center text-white ">
            <FiSearch size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
