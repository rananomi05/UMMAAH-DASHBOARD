'use client';

import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaPlus } from 'react-icons/fa';
import { BsCalendar2Event } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import Navbar from '../Components/Navbar';

import image from "../Components/Assets/Black (1).png";
import image1 from "../Components/Assets/Black (2).png";
import image2 from "../Components/Assets/Black (3).png";
import image3 from "../Components/Assets/Black.png";
import image4 from "../Components/Assets/🐑.png";
import image5 from "../Components/Assets/Ellipse 15.png";
import image6 from "../Components/Assets/Ellipse 117.png";
import image7 from "../Components/Assets/Ellipse 118.png";


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { name: "Page A", uv: 4000, pv: 2400 },
    { name: "Page B", uv: 3000, pv: 1398 },
    { name: "Page C", uv: 2000, pv: 9800 },
    { name: "Page D", uv: 2780, pv: 3908 },
    { name: "Page E", uv: 1890, pv: 4800 },
    { name: "Page F", uv: 2390, pv: 3800 },
    { name: "Page G", uv: 3490, pv: 4300 },
];

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const events = [
    { day: 'T', label: 'Ashura', color: 'bg-red-500' },
    { day: 'S', label: '', color: 'bg-blue-500' },
    { day: 'M', label: '', color: 'bg-blue-500' },
    { day: 'W', label: '', color: 'bg-blue-500' },
    { day: 'F', label: '', color: 'bg-blue-500' },
];
const recentEvents = [
    {
        Image: image, // ✅ direct reference
        title: 'Hajj Begins',
        date: '8 Dhul-Hijjah / June 14, 2024',
        desc: 'The beginning of the sacred pilgrimage to Makkah.',
        icon: <FaArrowUp />,
    },
    {
        Image: image1,
        title: 'Laylat al-Qadr',
        date: '27 Ramadan / April 7, 2024',
        desc: '',
        icon: <FaArrowDown />,
    },
    {
        Image: image2,
        title: "Jumu'ah Special",
        date: 'Every Friday',
        desc: '',
        icon: <FaArrowDown />,
    },
    {
        Image: image3,
        title: 'Eid al-Adha Celebration',
        date: '10 Dhul-Hijjah 1445 / June 16, 2024',
        desc: '',
        icon: <FaArrowDown />,
    },
    {
        Image: image4,
        title: 'Mawlid an-Nabi Gathering',
        date: "12 Rabi' al-Awwal 1446 / August",
        desc: '',
        icon: <FaArrowUp />,
    },
];


export default function UpcomingEvents() {
    const [view, setView] = useState('Week');

    return (
        <div>
            <Navbar />
            <div className='ml-66 mt-8 font-lufga '>
                <div className="flex flex-col md:flex-row p-6   gap-6">
                    {/* Left Section */}
                    <div className="w-[684px] h-[497px] md:w-2/3 bg-[#F2F2F5] rounded-[27px] p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <BsCalendar2Event className="text-[43px]" /> Upcoming Events
                            </h1>
                            <button className="flex items-center gap-1 bg-white px-3 py-1 border rounded-full text-sm">
                                {view} <IoMdArrowDropdown />
                            </button>
                        </div>
                        <p className="text-[20px] w-[416px] mb-6">
                            Track and manage important Islamic dates effortlessly.
                        </p>

                        {/* Graph */}
                        <div className='flex flex-row'>
                            <div className='flex flex-col mt-30  ml-4'>
                                <p className="text-[43px] font-bold">+20%</p>
                                <p className="text-[20px] w-[238px]">
                                    This week's events have 20% more community engagements.
                                </p>
                            </div>
                            <div className="flex items-end justify-between w-[400px] h-60 mb-6">
                                {days.map((day, idx) => {
                                    const event = events.find((e) => e.day === day);
                                    const hasEvent = Boolean(event);
                                    return (
                                        <div key={idx} className="flex flex-col items-center">
                                            {hasEvent && event && (
                                                <div
                                                    className={`w-2 h-2 ${event.color} rounded-full mb-1`}
                                                    title={event.label}
                                                ></div>
                                            )}
                                            <div className="w-1 h-16 bg-gray-200"></div>
                                            <div
                                                className={`w-8 h-8 mt-1 rounded-full flex items-center justify-center font-bold ${day === 'T' ? 'bg-blue-600 text-white' : 'bg-gray-100'
                                                    }`}
                                            >
                                                {day}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/3 space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">Recent Events:</h2>
                            <a href="#" className="text-sm border-b b-2 font-semibold">
                                See All
                            </a>
                        </div>
                        {recentEvents.map((event, idx) => (
                            <div key={idx} className="flex items-start gap-3 border-b pb-3">
                                <img
                                    src={event.Image.src}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-[15px]">{event.title}</p>
                                    <p className="text-[13px] ">{event.date}</p>
                                    {event.desc && (
                                        <p className="text-[14px]  mt-1">{event.desc}</p>
                                    )}
                                </div>
                                <div className="w-10 h-10 ml-9 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                                    {event.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row ml-5'>
                    <div className='flex flex-col'>
                        <h1 className='text-[20px] font-bold'>Upcoming Local Events <span className='text-sm ml-17 border-b b-2 font-semibold'>See All</span></h1>
                        <div className='w-[406px] h-[82px] flex flex-row p-6 rounded-[52px] border border-[#BFBFBF]  mt-4 '>
                            <div>
                                <img src={image5.src} alt="Event" className=' rounded-full' />
                            </div>
                            <div className='flex flex-col ml-2'>
                                <h1 className='text-[15px] font-semibold'>Riyadh Central Masjid <span className='text-white bg-[#DE4A28] ml-3'>Special </span></h1>
                                <p className='text-[13px]'>Lecture series this Jumu'ah.</p>
                            </div>
                            <div className="w-[33px]  h-[34px] ml-7 rounded-full border border-[#D8D8D8]">
                                <FaPlus className="mt-2 ml-2" />
                            </div>
                        </div>
                        <div className='w-[406px] h-[82px] flex flex-row p-6 rounded-[52px] border border-[#BFBFBF]  mt-4 '>
                            <div>
                                <img src={image6.src} alt="Event" className=' rounded-full' />
                            </div>
                            <div className='flex flex-col ml-2'>
                                <h1 className='text-[15px] font-semibold'>Masjid Al-Haram <span className='text-white bg-[#83A2DB] ml-3'>Night </span></h1>
                                <p className='text-[13px]'>Qiyam-ul-Layl sessions.</p>
                            </div>
                            <div className="w-[33px]  h-[34px] ml-19 rounded-full border border-[#D8D8D8]">
                                <FaPlus className="mt-2 ml-2" />
                            </div>
                        </div>
                        <div className='w-[406px] h-[82px] flex flex-row p-6 rounded-[52px] border border-[#BFBFBF]  mt-4 '>
                            <div>
                                <img src={image7.src} alt="Event" className=' rounded-full' />
                            </div>
                            <div className='flex flex-col ml-2'>
                                <h1 className='text-[15px] font-semibold'>Islamic Center of NY <span className='text-white bg-[#239371] ml-3'>Night </span></h1>
                                <p className='text-[13px]'>Eid Salah arrangements.</p>
                            </div>
                            <div className="w-[33px]  h-[34px] ml-14 rounded-full border border-[#D8D8D8]">
                                <FaPlus className="mt-2 ml-2" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col ml-6  bg-[#F2F2F5] w-[266px] h-[330px] p-6 rounded-[27px] mt-4'>
                        <h1 className='text-[20px] font-bold'>Add Event:</h1>
                        <h1 className='text-[15px] mt-5 font-semibold'>Event Name:</h1>
                        <hr />
                        <h1 className='text-[15px] font-semibold'>Date: <span className='text-[#BFBFBF] ml-14'> Hijri & Modern</span></h1>
                        <hr />
                        <div className='flex flex-row mt-2'>
                            <h1 className='text-[15px]  font-semibold'>Icon:</h1>
                            <div className="w-[22px]  h-[23px] ml-40 mb-1 rounded-full border border-[#D8D8D8]">
                                <FaPlus className="mt-1 ml-1 " />
                            </div>
                        </div>
                        <hr />
                        <div className='w-[230px] h-[91px] p-2 mt-2 border border-[#000000] rounded-[12px]'>
                            <h1 className='text-[15px]  font-semibold'>Description:</h1>
                            <h1 className='text-[15px] text-[#BFBFBF]  font-semibold'>Max 50 words</h1>

                        </div>
                        <div className='flex flex-row mt-2'>
                            <h1 className='text-[15px]  font-semibold'>Background Image</h1>
                            <div className="w-[22px]  h-[23px] ml-14 mb-1 rounded-full border border-[#D8D8D8]">
                                <FaPlus className="mt-1 ml-1 " />
                            </div>
                        </div>
                        <hr />
                        <button>
                            <div className='w-[171px] h-[39px] p-2 mt-3 ml-7 bg-[#239371] rounded-[12px] text-[15px] font-bold text-white'>
                                Upload
                            </div>
                        </button>
                    </div>
                    <div className='flex flex-col ml-4  bg-[#F2F2F5] w-[350px] h-[330px] p-6 rounded-[27px] mt-4'>
                        <h1 className='text-[20px]  font-semibold'>Event Progress <span className='pl-14 text-[15px]'>DEC 16, 2024</span></h1>
                        <div className='mt-9'>
                            <BarChart width={320} height={250} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
