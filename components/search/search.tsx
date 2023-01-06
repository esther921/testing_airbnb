import { FiSearch } from "react-icons/fi";

export function SearchLocation() {
  return (
    <div>
      <div className="flex items-center border border-gray-200 shadow-sm px-3 py-2 rounded-full ">
        <a className="px-3 border-r mx-3 cursor-pointer border-gray-200 text-sm font-semibold text-gray-600">
          Anywhere
        </a>

        <a className="px-3 border-r cursor-pointer mx-3 border-gray-200 text-sm font-semibold text-gray-600">
          Any week
        </a>
        <a className="px-3 mx-3 cursor-pointer text-sm font-semibold text-gray-400">
          Add Guests
        </a>
        <a className="bg-primary cursor-pointer h-8 w-8 rounded-full justify-center flex items-center text-white ">
          <FiSearch size={16} />
        </a>
      </div>
    </div>
  );
}
