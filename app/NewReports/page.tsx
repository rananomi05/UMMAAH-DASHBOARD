'use client';

import image1 from "../Components/Assets/Ellipse 26.png";

import image2 from "../Components/Assets/Ellipse 24.png";
import image4 from "../Components/Assets/Ellipse 29.png";
import image5 from "../Components/Assets/pdf 1.png";
import logo from "../Components/Assets/Ellipse 99.png"
import logo1 from "../Components/Assets/Ellipse 100.png"



import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

import { FaCheck, FaCalendarAlt, FaPlus, FaStar, FaUpload } from 'react-icons/fa';
import Navbar from "../Components/Navbar";

export default function NewReports() {
    return (
        <div>
            <Navbar />
            <div className="ml-66 mt-8 font-lufga ">
                <div className="bg-[#F2F2F5]  py-0 px-6 rounded-2xl  w-[1087px] h-[346px] flex flex-col gap-6">
                    <div className="flex flex-row justify-between ">
                        <div className='bg-white mt-0 rounded-[5px] ml-30 pb-1 w-[430px] flex justify-between h-[40px]'>
                            <div className="w-[32px]  ml-1 h-[33px] rounded-full border border-[#D8D8D8]">
                                <FaPlus className="mt-2 ml-2" />
                            </div>
                            <div className='w-[119px] h-[34px] flex flex-row rounded-full border border-[#D8D8D8]'>
                                <img className="w-[34px] h-[34px] " src={image2.src}></img>
                                <h1 className="pt-1 pl-2 text-[16px] font-bold">Admin A</h1>
                            </div>
                            <div className='w-[119px] h-[34px] flex flex-row rounded-full border border-[#D8D8D8]'>
                                <img className="w-[34px] h-[34px] " src={image1.src}></img>
                                <h1 className="pt-1 pl-2 text-[16px] font-bold">Aisha K</h1>
                            </div>
                            <div className='w-[119px] h-[34px] mr-1 flex flex-row rounded-full border border-[#D8D8D8]'>
                                <img className="w-[34px] h-[34px] " src={image4.src}></img>
                                <h1 className="pt-1 pl-2 text-[16px] font-bold">Omar Z</h1>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-2 ml-20 ">
                            <div className="w-[33px]  h-[34px] rounded-full border border-[#D8D8D8]">
                                <FaPlus className="mt-2 ml-2" />
                            </div>
                            <div className="w-[33px]  h-[34px] rounded-full border border-[#D8D8D8]">
                                <FaUpload className="mt-2 ml-2" />
                            </div>
                            <div className="w-[33px]  h-[34px] rounded-full border border-[#D8D8D8]">
                                <FaCalendarAlt className="mt-2 ml-2" />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-row justify-between ">
                        <div className="flex flex-col justify-between">
                            <h1 className="text-[43px] text-[#BFBFBF] font-bold">New report</h1>
                            <h1 className="text-[2opx]  font-bold">Total Surah Views:</h1>
                            <h1 className="text-[35px] text-[#239371]  font-bold">528,976 <span className="bg-[#EA6863] text-[20px] text-white rounded">▼ 7.9%</span></h1>
                            <h1 className="text-[2opx]  font-bold">▼ 7.9% (vs last month)</h1>

                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row gap-2">
                                <div className="w-[56px] h-[25px] rounded-full bg-[#239371]">
                                    <div className="w-[23px] h-[23px] rounded-full bg-white ml-8 flex justify-center items-center">
                                    </div>
                                </div>
                                <h1 className="text-[15px]  font-semibold">Timeframe</h1>
                                <h1 className="text-[11px] bg-[#FFFFFF] rounded font-semibold pt-1 ml-20 mr-10">Nov 1 - Dec 14, 2024</h1>


                            </div>
                            <div className="flex flex-row gap-2 mt-2">
                                <div className="bg-[#83A2DB] w-[206px] h-[98px] text-white rounded-2xl p-3 flex flex-col justify-between">
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-[10px] font-medium">Most Read Surah</h1>
                                        <FaStar className="text-[15px]" />
                                    </div>
                                    <div>
                                        <h1 className="text-[22px] font-bold">42,300 Readers</h1>
                                        <h1 className="text-[15px]">Surah Al-Baqarah</h1>
                                    </div>
                                </div>
                                <div className="bg-[#EA6863] w-[206px] h-[98px] text-white rounded-2xl p-3 flex flex-col justify-between">
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-[10px] font-medium">Most Read Surah</h1>
                                        <FaStar className="text-[15px]" />
                                    </div>
                                    <div>
                                        <h1 className="text-[22px] w-[83px] font-bold">72,000 Users</h1>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-[15px]">Surah Al-Baqarah</h1>
                            <div className='w-[240px] h-[41px] bg-white flex flex-row rounded-full border border-[#D8D8D8]'>
                                <img className="w-[34px] h-[34px] " src={logo1.src}></img>
                                <h1 className="pt-2 pl-2 text-[15px] font-bold">227,459 <span className="pl-20 text-[#239371]">45%</span></h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-[15px]">Surah Yaseen</h1>
                            <div className='w-[240px] h-[41px] bg-white flex flex-row rounded-full border border-[#D8D8D8]'>
                                <img className="w-[34px] h-[34px] " src={logo.src}></img>
                                <h1 className="pt-2 pl-2 text-[15px] font-bold">142,823 <span className="pl-20 text-[#239371]">27%</span></h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-[15px]">Surah Al-Fatiha</h1>
                            <div className='w-[240px] h-[41px] bg-white flex flex-row rounded-full border border-[#D8D8D8]'>
                                <img className="w-[34px] h-[34px] " src={logo1.src}></img>
                                <h1 className="pt-2 pl-2 text-[15px] font-bold">80,935 <span className="pl-20 text-[#EA6863]">15%</span></h1>
                            </div>
                        </div>  <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-[15px]">Surah Al-Kahf</h1>
                            <div className='w-[240px] h-[41px] bg-white flex flex-row rounded-full border border-[#D8D8D8]'>
                                <img className="w-[34px] h-[34px] " src={logo1.src}></img>
                                <h1 className="pt-2 pl-2 text-[15px] font-bold">37,028 <span className="pl-20 text-[#EA6863]">8%</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <div className="flex flex-col">
                        <div className="flex flex-row ">
                            <div className="bg-[#F2F2F5] mt-1 p-3  rounded-2xl w-[292px] h-[274px] flex flex-col ">
                                <h1 className="text-[20px] font-bold">Platform Engagement</h1>
                                <div className="w-[48px] h-[15px] text-center ml-55 bg-[#FFFFFF] rounded-full mt-2">
                                    <p className="text-[8px]">Filters</p>
                                </div>
                                <div className="flex flex-row  mt-3 ">
                                    <div className="border-[22px] w-[36px]h-[36px] rounded-full border-[#239371]"></div>
                                    <h1 className="text-[13px] pt-3 pl-2">Surah Completion Rate <span className="text-[#83A2DB] ml-10 ">45% </span></h1>
                                </div>
                                <div className="flex flex-row  mt-2  ">
                                    <div className="border-[22px] w-[36px]h-[36px] rounded-full border-[#83A2DB]"></div>
                                    <h1 className="text-[13px] pt-3 pl-2">Daily Ayah Readers <span className="text-[#83A2DB] ml-16 ">28% </span></h1>
                                </div>
                                <div className="flex flex-row  mt-2  ">
                                    <div className="border-[22px] w-[36px]h-[36px] rounded-full border-[#C9C062]"></div>
                                    <h1 className="text-[13px] pt-3 pl-2">Surahs In Progress <span className="text-[#EA6863] ml-16 ">15% </span></h1>
                                </div>
                                <div className="flex flex-row  mt-2  ">
                                    <div className="border-[22px] w-[36px]h-[36px] rounded-full border-[#FF474C]"></div>
                                    <h1 className="text-[13px] pt-3 pl-2">Dropped Readings <span className="text-[#EA6863] ml-16 ">12% </span></h1>
                                </div>
                            </div>
                            <div className="bg-[#F2F2F5] mt-1 p-3 ml-1  rounded-2xl w-[292px] h-[274px] flex flex-col ">
                                <h1 className="text-[20px] font-bold">User Insights</h1>
                                <div className="w-[48px] h-[15px] text-center ml-55 bg-[#FFFFFF] rounded-full mt-2">
                                    <p className="text-[8px]">Filters</p>
                                </div>
                                <div className="flex flex-row gap-6 mt-6">
                                    <div className="bg-[#239371] w-[51px] h-[166px] rounded-[9px] mt-2">

                                    </div>
                                    <div className="bg-[#83A2DB] w-[51px] mt-13 h-[123px] rounded-[9px] mt-2">

                                    </div>
                                    <div className="bg-[#C9C062] w-[51px] mt-23 h-[80px] rounded-[9px] mt-2">

                                    </div>
                                    <div className="bg-[#FF474C] w-[51px] mt-36 h-[30px] rounded-[9px] mt-2">

                                    </div>
                                </div>
                            </div>
                        </div >
                        <div className="w-[571px] h-[212px] bg-[#F2F2F5] mt-1 p-3 rounded-2xl flex flex-col">
                            <h1 className="text-[20px] font-bold">Daily Reading Trends</h1>
                            <div className="w-[538px] h-[151px]  bg-[#FFFFFF] rounded-[27px] mt-2">
                                <div className="flex flex-row justify-between">
                                    <div className="w-[284px] h-[116] ml-2 mt-8">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart
                                                data={data}
                                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}

                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="flex flex-col justify-center mr-4 items-center mt-2">
                                        <h1 className="text-[10px] font-semibold">Highest Activity: Sunday (45% surge)</h1>
                                        <h1 className="text-[10px] pt-4 font-semibold">Lowest Activity: Tuesday (12% drop)</h1>
                                        <h1 className="text-[10px] pt-4 w-[186px] font-semibold">Overall Trend: Consistent engagement throughout weekdays.</h1>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F2F2F5] mt-1 p-3 ml-1  rounded-[27px] w-[490px] h-[490px] flex flex-col ">
                        <div className="bg-[#F2F2F5]  shadow-lg  mt-1 p-3 ml-1 mr-1 border border-[#BFBFBF]  rounded-[27px] w-[460px] h-[263px] flex flex-col justify-center items-center">
                            <img className="w-[50px] h-[50px]" src={image5.src}></img>
                            <h1 className="text-[20px] pt-1 font-bold">Drag and drop Quran content files to upload</h1>
                            <p className="text-[20px] mt-2 text-center">For maximum support, upload in formats like DOCX, TXT, or PDF.</p>
                            <div className="w-[171px] h-[39px] mt-3 rounded-[12px] border border-[#D8D8D8]  flex flex-row justify-center items-center">
                                <h1 className="text-[20px] font-semibold">Select Files</h1>
                            </div>
                        </div>
                        <div className="mt-7 ml-5">
                            <h1 className="text-[17px] font-bold  ">Title: <span className="text-[#BFBFBF] ml-9">Enter Surah or Dua name</span></h1>
                            <hr className="border-b-2 border-[#BFBFBF]" />
                            <h1 className="text-[17px] font-bold ">Arabic <span className="text-[#BFBFBF] ml-9">Upload or paste Arabic text</span></h1>
                            <hr className="border-b-2 border-[#BFBFBF]" />

                            <h1 className="text-[17px] font-bold ">English Translation <span className="text-[#BFBFBF] ml-9">Upload or paste Arabic text</span></h1>
                            <hr className="border-b-2 border-[#BFBFBF]" />

                            <h1 className="text-[17px] font-bold ">Source <span className="text-[#BFBFBF] ml-9">Provide the source or reference</span></h1>
                            <hr className="border-b-2 border-[#BFBFBF]" />
                            <button>
                                <div className="w-[171px] h-[39px] bg-[#239371] mt-6 ml-70 rounded-[12px] border border-[#D8D8D8]  flex flex-row justify-center items-center">
                                    <h1 className="text-[20px] text-white ">Upload</h1>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    )
}
