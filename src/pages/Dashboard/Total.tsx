

import { GiSteeringWheel } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { HiTruck } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { BiSolidTruck } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";


import "./style.css"


const Total = () => {
  return (
    <div className="grid grid-cols-4 bg-gray-400 gap-4 gap-y-6">
      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute">
          <GiSteeringWheel  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Registered Drivers</h2>
            <p className="text-[16px] text-right">
              5
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute icon-pink">
          <FaTruck  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Registered Vehicles</h2>
            <p className="text-[16px] text-right">
              5
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute icon-green">
          <FaMapMarkerAlt  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Available Destinations</h2>
            <p className="text-[16px] text-right">
              5
            </p>
          </div>
        </div>
      </div> 

      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute icon-blue">
          <FaTicketAlt  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Daily Tickets</h2>
            <p className="text-[16px] text-right">
              3
            </p>
          </div>
        </div>
      </div> 

      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute icon-green">
          <HiTruck  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Daily Cargo</h2>
            <p className="text-[16px] text-right">
              3
            </p>
          </div>
        </div>
      </div> 

      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute icon-gray">
          <FaUsers  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Passengers</h2>
            <p className="text-[16px] text-right">
              5
            </p>
          </div>
        </div>
      </div> 

      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute icon-orange">
          <BiSolidTruck  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Total Cargos</h2>
            <p className="text-[16px] text-right">
              5
            </p>
          </div>
        </div>
      </div> 

      <div className="bg-white rounded-lg relative h-[150px] p-4 shadow-lg">

        <span className="icon-wrapper absolute icon-gray">
          <FaUsersCog  className="text-white text-2xl "/>
        </span>
        <div className="flex justify-between items-center">
          <span></span>
          <div>
            <h2 className="text-[14px]">Administrators</h2>
            <p className="text-[16px] text-right">
              1
            </p>
          </div>
        </div>  
      </div> 


    </div>
  )
}

export default Total