"use client";

import { useState, useEffect, useRef } from "react";




import Link from 'next/link';
import mainLogo from '@/app/Components/Assets/NavbarLogos/Group 3922.svg';
import Logo from '@/app/Components/Assets/NavbarLogos/Black (3).svg';
import Logo1 from '@/app/Components/Assets/NavbarLogos/Black.svg';
import Logo2 from '@/app/Components/Assets/NavbarLogos/Layer 2.svg';
import Logo3 from '@/app/Components/Assets/NavbarLogos/Vector (3).svg';
import Logo4 from '@/app/Components/Assets/NavbarLogos/Black (1).svg';
import Logo5 from '@/app/Components/Assets/NavbarLogos/Group 4129.svg';
import Logo6 from '@/app/Components/Assets/NavbarLogos/Black (2).svg';
import Logo7 from '@/app/Components/Assets/NavbarLogos/Layer 1.svg';
import image from '@/app/Components/Assets/NavbarLogos/bd6d6fda19219a8eac4d603b0eee4a28e98f829f.jpg';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShareNodes, faArrowUpFromBracket, faStar, faPlus, faBarsProgress, faCalendar, faPaperPlane, faTriangleExclamation, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setIsSidebarOpen(false);
            }
        }

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);


    return (
        <div>
            <div>
                <nav className="bg-white border-gray-200 font-lufga dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                        <img
                            src={mainLogo.src}
                            className="h-[60px] mt-5"
                            alt="Flowbite Logo"
                        />


                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                            <button
                                type="button"
                                onClick={() => setIsSidebarOpen(true)}
                                className="flex flex-row items-center bg-[#F2F2F5]   font-medium rounded-[53px] text-sm px-4 py-2"
                            >
                                <svg
                                    className="w-[30px] text-[#000000]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                                <img src={image.src} className="h-[43px] w-[43px] inline-block rounded-full ml-2" alt="Logo" />
                            </button>

                            {/* Sidebar Overlay */}
                            {isSidebarOpen && (
                                <div className="fixed inset-0  "></div>
                            )}

                            {/* Sidebar Drawer */}
                            <div
                                ref={sidebarRef}
                                className={`absolute top-0  left-0 mt-[120px] w-64 bg-white  transform transition-transform duration-300"
                                    }`}
                            >

                                {/* ${isSidebarOpen ? "translate-x-0" : "-translate-x-full */}
                                {/* Sidebar Header */}
                                {/* <div className="flex items-center  justify-between p-4 border-b">
                                    <h2 className="text-lg font-bold">Menu</h2>
                                    <button
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        ✕
                                    </button>
                                </div> */}

                                {/* Sidebar Content */}
                                <ul className="flex flex-col p-4 space-y-5 text-gray-700">
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faArrowLeft} className="mr-[60px]" />
                                            <a href="#" className="text-[#000000] font-semibold ">Go Back</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faShareNodes} className="mr-[50px]" />
                                            <a href="#" className="text-[#000000] font-semibold ">Share Content</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faArrowUpFromBracket} className="mr-[60px]" />
                                            <a href="#" className="text-[#000000] font-semibold ">Upload Files</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faStar} className="mr-[76px]" />
                                            <a href="#" className="text-[#000000] font-semibold ">Favorites</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faPlus} className="mr-[75px]" />
                                            <a href="#" className="text-[#000000] font-semibold ">Add New</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faBarsProgress} className="mr-[30px]" />
                                            <a href="#" className="text-[#000000] font-semibold ">Manage Content</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCalendar} className="mr-[30px]" />
                                            <a href="#" className="text-[#000000] font-semibold ">Event Calendar</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center  justify-between">
                                            <FontAwesomeIcon icon={faPaperPlane} className=" ml-3" />
                                            <a href="#" className="text-[#000000] mr-3 font-semibold ">Send Feedback</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] flex items-center  justify-between">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="ml-3" />
                                            <a href="#" className="text-[#000000] mr-3 font-semibold ">System Alerts</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#F2F2F5] rounded-[15px] mt-28 flex items-center justify-between">
                                            <FontAwesomeIcon icon={faSun} className="ml-3" />
                                            <a href="#" className="text-[#000000] mr-3 font-semibold ">Brighten It Up</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-[192px] h-[53px] bg-[#000000] rounded-[15px] flex items-center justify-between">
                                            <FontAwesomeIcon icon={faMoon} className="text-white ml-3" />
                                            <a href="#" className="text-[#FFFFFF] mr-3 font-semibold ">Dim It Down</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button
                                data-collapse-toggle="navbar-cta"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-cta"
                        >
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-[#000000]  font-bold  rounded-sm md:bg-transparent md:text-[#000000]  md:dark:text-[#000000] "
                                        aria-current="page"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block  ">Admin</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="../ManagemantHub"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo1.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block ">Islamic Events</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="../NewReports"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo2.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block ">Daily Duas</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="../UpcomingEvents"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo3.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block ">Daily Hadith</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="../KidsDashboard"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo4.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block ">Prayer Times</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo5.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block ">Books</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo6.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block ">Guides</h1>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img src={Logo7.src} className="h-[43px] w-[43px] inline-block mr-2" alt="Logo" />
                                            <br />
                                            <h1 className="inline-block ">Kids' Corner</h1>
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>


            </div >
        </div >
    )
}
