import React from "react";
import { GoHomeFill } from "react-icons/go";
import { TbCirclePercentage, TbMail, TbLogout } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";

const Sidebar = (props) => {
    
    const {showMenu} = props;

    return (
        <div className={`bg-stone-900 fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-5 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? 'left-0' : '-left-full'}`}>
            <div>
                <ul className=" pl-4">
                    <li>
                        <h1 className="text-xl uppercase font-bold text-center my-4 "><span className="text-green-500">Fo</span>St</h1>
                    </li>

                    <li className="bg-stone-700 rounded-tl-xl rounded-bl-xl p-4 ">
                        <a
                            href="#"
                            className="bg-green-600 rounded-xl p-4 flex justify-center">
                            <GoHomeFill className="text-2xl " />
                        </a>
                    </li>

                    <li className="hover:bg-stone-700 rounded-tl-xl rounded-bl-xl p-4 group transition-colors">
                        <a
                            href="#"
                            className="group-hover:bg-green-600 rounded-xl p-4 flex justify-center text-green-600 group-hover:text-white transition-colors">
                            <TbCirclePercentage className="text-2xl " />
                        </a>
                    </li>

                    <li className="hover:bg-stone-700 rounded-tl-xl rounded-bl-xl p-4 group transition-colors">
                        <a
                            href="#"
                            className="group-hover:bg-green-600 rounded-xl p-4 flex justify-center text-green-600 group-hover:text-white transition-colors">
                            <PiBowlFoodFill className="text-2xl " />
                        </a>
                    </li>

                    <li className="hover:bg-stone-700 rounded-tl-xl rounded-bl-xl p-4 group transition-colors">
                        <a
                            href="#"
                            className="group-hover:bg-green-600 rounded-xl p-4 flex justify-center text-green-600 group-hover:text-white transition-colors">
                            <TbMail className="text-2xl " />
                        </a>
                    </li>

                    <li className="hover:bg-stone-700 rounded-tl-xl rounded-bl-xl p-4 group transition-colors">
                        <a
                            href="#"
                            className="group-hover:bg-green-600 rounded-xl p-4 flex justify-center text-green-600 group-hover:text-white transition-colors">
                            <IoMdNotifications className="text-2xl " />
                        </a>
                    </li>

                    <li className="hover:bg-stone-700 rounded-tl-xl rounded-bl-xl p-4 group transition-colors">
                        <a
                            href="#"
                            className="group-hover:bg-green-600 rounded-xl p-4 flex justify-center text-green-600 group-hover:text-white transition-colors">
                            <IoMdSettings className="text-2xl " />
                        </a>
                    </li>


                </ul>
            </div>
            <div>
                <ul className=" pl-4">
                    <li className="hover:bg-stone-700 rounded-tl-xl rounded-bl-xl p-4 group transition-colors">
                        <a
                            href="#"
                            className="group-hover:bg-green-600 rounded-xl p-4 flex justify-center text-green-600 group-hover:text-white transition-colors">
                            <TbLogout className="text-2xl " />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar