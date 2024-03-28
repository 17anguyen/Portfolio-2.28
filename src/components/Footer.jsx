import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { github } from '../assets';

import { styles } from "../styles";
import { footerLinks } from "../constants";
import { pdf, resume } from "../assets";

const Footer = () => {
    const [active, setActive] = useState("");

    return (
        <div
            className='w-full flex bottom-0 pb-[10px]'
        >
            <div className='w-full flex  justify-evenly'>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {footerLinks.map((footer) => (
                        <li
                            key={footer.name}
                            className={`${active === footer.name ? "text-white" : "text-[#7F886A]"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(footer.name)}
                        >
                            <a onClick={() => window.open(footer.URL, "_blank")}>
                                <div className="glass-bg hover:bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" >
                                    <img
                                        src={footer.icon}
                                        alt={footer.name}
                                        className="w-1/2 h-1/2 object-contain  z-10" />
                                </div>
                            </a>


                        </li>

                    ))}
                    <li>
                        <a href={pdf} download={pdf}>
                            <div className="glass-bg hover:bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" >
                                <img
                                    src={resume}
                                    alt="resume"
                                    className="w-1/2 h-1/2 object-contain  z-10" />
                            </div>
                        </a>

                    </li>
                </ul>
            </div >
        </div >
    );
};

export default Footer;