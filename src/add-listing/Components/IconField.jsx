import React from 'react'
import { FaTags } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaPallet } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";
import { FaTag } from "react-icons/fa6";


const iconsMap = {

    FaClipboardList:<FaClipboardCheck className='size-5 text-#526ae2]'/>,
    FaTag:<FaTag className='size-5 text-[#526ae2]'/>,
    FaDollarSign:<FaDollarSign className='size-5 text-[#526ae2]'/>,
    FaMoneyBillAlt:<FaMoneyBillAlt className='size-5 text-[#526ae2]'/>,
    FaCar:<FaCar className='size-5 text-[#526ae2]'/>,
    FaCheckCircle:<FaCheckCircle className='size-5 text-[#526ae2]'/>,
    FaIndustry:<FaIndustry className='size-5 text-[#526ae2]'/>,
    FaCarSide:<FaCarSide className='size-5 text-[#526ae2]'/>,
    FaCalendarAlt:<FaCalendar className='size-5 text-[#526ae2]'/>,
    FaRoad:<FaRoad className='size-5 text-[#526ae2]'/>,
    FaCogs:<FaCogs className='size-5 text-[#526ae2]'/>,
    FaGasPump:<FaGasPump className='size-5 text-[#526ae2]'/>,
    FaTachometerAlt:<FaTachometerAlt className='size-5 text-[#526ae2]'/>,
    FaWrench:<FaWrench className='size-5 text-[#526ae2]'/>,
    FaCircle:<FaCircle className='size-5 text-[#526ae2]'/>,
    FaPalette:<FaPallet className='size-5 text-[rgb(114,136,243)]'/>,
    FaDoorClosed:<FaDoorClosed className='size-5 text-[#526ae2]'/>,
    FaIdCard:<FaIdCard className='size-5 text-[#526ae2]'/>,
    FaTags:<FaTags className='size-5 text-[#526ae2]'/>,
    FaFileAlt:<FaFile className='size-5 text-[#526ae2]'/>


};


function IconField({icon}) {
  return (
    <div className=''>
            {iconsMap[icon]}
    </div>
  )
}

export default IconField