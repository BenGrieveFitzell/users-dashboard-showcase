import { HiOutlineUsers } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";

const Sidebar = () => (
  <div>
    <div className="hidden md:flex md:flex-col md:w-[80px] md:h-screen md:bg-white md:justify-between md:py-10 fixed items-center">
      <div className="md:space-y-10">
        <BiHomeAlt className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100 stroke-[0.01px]" />
        <HiOutlineUsers className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100 stroke-[0.01px]" />
        <HiOutlineUserCircle className="h-10 w-10 border rounded-lg p-1 text-gray-100 bg-[#3F6BEC] font-light" />
        <FiSettings className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100" />
      </div>
      <div>
        <MdOutlineExitToApp className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100" />
      </div>
    </div>
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white flex justify-around items-center py-3 shadow-md">
        <BiHomeAlt className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100 stroke-[0.01px]" />
        <HiOutlineUsers className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100 stroke-[0.01px]" />
        <HiOutlineUserCircle className="h-10 w-10 border rounded-lg p-1 text-gray-100 bg-[#3F6BEC] font-light" />
        <FiSettings className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100" />
        <MdOutlineExitToApp className="h-10 w-10 border border-gray-100 rounded-lg p-1 text-gray-400 bg-gray-100" />
      </div>
    </div>
  </div>
);

export default Sidebar;
