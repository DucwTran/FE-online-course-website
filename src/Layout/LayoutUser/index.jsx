import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

function LayoutUser() {
  return (
    <div className='flex h-screen bg-gray-100 text-gray-900 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

      <Sidebar />

      <div className="z-10 w-full">
      <Outlet />
      </div>
    </div>
  );
}

export default LayoutUser
;
