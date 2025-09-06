'use client';

import image from "../Components/Assets/Ellipse 25.png";
import image1 from "../Components/Assets/Ellipse 26.png";
import image2 from "../Components/Assets/Ellipse 24.png";
import image3 from "../Components/Assets/Ellipse 27.png";
import image4 from "../Components/Assets/Ellipse 29.png";
import image5 from "../Components/Assets/Ellipse 28.png";






import { FC } from 'react';

import { FaCheck, FaCalendarAlt, FaPlus, FaStar, FaUpload } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import Navbar from "../Components/Navbar";
const tasks = {
    allocation: [
        { text: 'Assign Task to Team Member!', icon: <FaCheck /> },
        { text: 'Confirm Task Assignment!', icon: <FaCalendarAlt /> },
    ],
    requirements: [
        'Define Task Objectives',
        'Set Priority Level',
        'Highlight Key Deliverables',
        'Delegate Task to Relevant Team',
        'Notify Team of Deadlines',
    ],
    execution: [
        'Track Task Dependencies',
        'Monitor Task Progress',
        'Review Progress Milestones',
        'Verify Task Completion',
    ],
    processing: [
        'Task Verification',
        'Feedback Collection',
        'Team Communication',
        'Closure Notification',
        'Post-Task Evaluation',
        'Task Archival',
    ],
};

const data = [
    {
        subject: "Design Sprint",
        status: "In Progress",
        startDate: "2024-12-01 09:00 AM",
        endDate: "2024-12-15 05:00 PM",
        user: "Ali Khalid",
        statusColor: "bg-[#83A2DB]",
    },
    {
        subject: "Kickoff Meeting",
        status: "Scheduled",
        startDate: "2024-12-03 10:00 AM",
        endDate: "2024-12-03 11:30 AM",
        user: "Fatima Noor",
        statusColor: "bg-[#EA6863]",
    },
    {
        subject: "API Integration",
        status: "Completed",
        startDate: "2024-11-20 08:00 AM",
        endDate: "2024-11-25 06:00 PM",
        user: "Ayesha Karim",
        statusColor: "bg-[#808080]",
    },
    {
        subject: "QA Review",
        status: "Pending",
        startDate: "2024-12-07 02:00 PM",
        endDate: "2024-12-09 06:00 PM",
        user: "Sameer Ahmed",
        statusColor: "bg-[#C9C062]",
    },
    {
        subject: "Content Update",
        status: "Overdue",
        startDate: "2024-11-30 01:00 PM",
        endDate: "2024-12-09 06:00 PM",
        user: "Zara Khan",
        statusColor: "bg-[#FF474C]",
    },
    {
        subject: "Final Prep",
        status: "Scheduled",
        startDate: "2024-12-12 10:00 AM",
        endDate: "2024-12-12 01:00 PM",
        user: "Omar Sheikh",
        statusColor: "bg-[#FF4DA6]",
    },
];





const ManagementHub: FC = () => {

    return (
        <div>
            <Navbar />
            <div className="bg-[#F2F2F5] ml-66 mt-8 py-0 px-6 rounded-2xl shadow-sm w-[1080px] h-[404px] flex flex-col gap-6">
                <div className="flex flex-row  ">
                    <h1 className="text-2xl pt-6 font-bold">Customer Journeys</h1>
                    <div className='bg-white mt-0 rounded-[5px] ml-30 pb-1 w-[400px] flex justify-between h-[50px]'>
                        <img className="ml-2" src={image2.src}></img>
                        <img src={image.src}></img>
                        <img src={image1.src}></img>
                        <img src={image3.src}></img>
                        <img src={image4.src}></img>
                        <img className="mr-2" src={image5.src}></img>

                    </div>
                    <div className="flex flex-row gap-4 mt-4 ml-20">
                        <div className="w-[52px]  h-[53px] rounded-full border border-black">
                            <FaPlus className="mt-4 ml-4" />
                        </div>
                        <div className="w-[52px]  h-[53px] rounded-full border border-black">
                            <FaUpload className="mt-4 ml-4" />
                        </div>
                        <div className="w-[52px]  h-[53px] rounded-full border border-black">
                            <FaCalendarAlt className="mt-4 ml-4" />
                        </div>

                    </div>

                </div>
                <div className="grid grid-cols-4 gap-6 text-sm">
                    {/* Task Allocation */}
                    <div className="flex flex-col w-[215px] h-[253px] bg-[#FFFFFF] rounded-[26px] gap-4">
                        <div className="flex items-center  ">
                            <img className="w-[50px] h-[50px] rounded-full mt-4 ml-4" src={image2.src} alt="User" />
                            <FaCheck className="text-gray-500 ml-16 mt-2" />
                            <FaCalendarAlt className="text-gray-500 ml-4 mt-2" />
                        </div>
                        <h1 className="ml-6 w-[161px]">Assign Task to Team Member!</h1>
                        <div className="flex items-center  ">
                            <img className="w-[50px] h-[50px] rounded-full mt-1 ml-4" src={image2.src} alt="User" />
                            <FaCheck className="text-gray-500 ml-16 mt-2" />
                            <FaCalendarAlt className="text-gray-500 ml-4 mt-2" />
                        </div>
                        <h1 className="ml-6 w-[161px]">Confirm Task Assignment!</h1>

                        <h2 className="font-semibold mt-2 text-base">Task Allocation</h2>

                    </div>


                    {/* Task Requirements */}
                    <div className="flex flex-col w-[215px] h-[253px] bg-[#FFFFFF] rounded-[26px] ">
                        <div className="flex items-center mt-3 ">
                            <img className="w-[41px] h-[41px] rounded-full  ml-2" src={image.src} alt="User" />
                            <h1 className="text-[10px] ml-3 w-[91px] ">Define Task Objectives</h1>
                            <FaCheck className="text-gray-500 ml-1 " />
                            <FaCalendarAlt className="text-gray-500 ml-4 " />
                        </div>
                        <div className="flex items-center mt-2 ">
                            <img className="w-[41px] h-[41px] rounded-full  ml-2" src={image.src} alt="User" />
                            <h1 className="text-[10px] ml-3 w-[91px] ">Set Priority Level</h1>
                            <FaCheck className="text-gray-500 ml-1 " />
                            <FaCalendarAlt className="text-gray-500 ml-4 " />
                        </div>
                        <div className="flex items-center mt-2 ">
                            <img className="w-[41px] h-[41px] rounded-full  ml-2" src={image.src} alt="User" />
                            <h1 className="text-[10px] ml-3 w-[91px] ">Highlight Key Deliverables</h1>
                            <FaCheck className="text-gray-500 ml-1 " />
                            <FaCalendarAlt className="text-gray-500 ml-4 " />
                        </div>
                        <div className="flex items-center mt-2 ">
                            <img className="w-[41px] h-[41px] rounded-full  ml-2" src={image1.src} alt="User" />
                            <h1 className="text-[10px] ml-3 w-[91px] ">Highlight Key Deliverables</h1>
                            {/* <FaCheck className="text-gray-500 ml-1 " />
                            <FaCalendarAlt className="text-gray-500 ml-4 " /> */}
                            < FiMoreHorizontal className="font-bold text-black ml-4 w-[17px] " />

                        </div>
                        <div className="flex items-center mt-2 ">
                            <img className="w-[41px] h-[41px] rounded-full  ml-2" src={image1.src} alt="User" />
                            <h1 className="text-[10px] ml-3 w-[91px] ">Notify Team of Deadlines</h1>

                            < FiMoreHorizontal className=" font-bold text-black ml-4 w-[17px] " />
                        </div>
                        <h2 className="font-semibold mt-5 text-base">Task Requirements</h2>

                    </div>

                    {/* Execution & Follow-Up */}
                    <div className="flex flex-col gap-2 w-[215px] h-[253px] bg-[#FFFFFF] rounded-[26px]">
                        <div className="flex items-center mt-2 ">
                            <div className="w-[41px] ml-2  h-[41px] rounded-full border border-black">
                                <FaPlus className="mt-3 ml-3" />
                            </div>
                            <h1 className="text-[10px] ml-3 w-[91px] ">Track Task Dependencies</h1>
                        </div>
                        <div className="flex items-center  ">
                            <div className="w-[41px] ml-2  h-[41px] rounded-full border border-black">
                                <FaPlus className="mt-3 ml-3" />
                            </div>
                            <h1 className="text-[10px] ml-3 w-[91px] ">Monitor Task Progress</h1>
                        </div>
                        <div className="flex items-center ">
                            <img className="w-[41px] h-[41px] rounded-full  ml-2" src={image2.src} alt="User" />
                            <h1 className="text-[10px] ml-3 w-[91px] ">Review Progress Milestones</h1>

                            < FiMoreHorizontal className=" font-bold text-black ml-4 w-[17px] " />
                        </div>
                        <div className="flex items-center  ">
                            <img className="w-[41px] h-[41px] rounded-full  ml-2" src={image1.src} alt="User" />
                            <h1 className="text-[10px] ml-3 w-[91px] ">Review Progress Milestones</h1>

                            < FiMoreHorizontal className=" font-bold text-black ml-4 w-[17px] " />
                        </div>
                        <div className="flex items-center  ">
                            <div className="w-[41px] ml-2  h-[41px] rounded-full border border-black">
                                <FaPlus className="mt-3 ml-3" />
                            </div>
                            <h1 className="text-[10px] ml-3 w-[91px] ">Verify Task Completion</h1>
                        </div>
                        <h2 className="font-semibold mt-4 text-base">Execution & Follow-Up</h2>

                    </div>

                    {/* Request Processing */}
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-3">
                            {tasks.processing.map((item, i) => (
                                <div
                                    key={i}
                                    className={`rounded-xl h-[66px] text-center p-3 text-center text-xs font-medium shadow-sm ${i === 0 ? 'bg-black text-white' : 'bg-[#FFFFFF] text-black'
                                        }`}
                                >
                                    {item}
                                </div>
                            ))}

                        </div>
                        <h2 className="font-semibold mt-8 text-base">Request Processing</h2>

                    </div>
                </div>
                <div className=" flex flex-col md:flex-row ">
                    <div className="bg-[#F2F2F5] rounded-[27px] w-[694px] h-[344px]  p-4 rounded-2xl  flex-1 ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Knowledge Resources</h2>
                            <div className="flex gap-2">
                                <div className="flex flex-row gap-2 ">
                                    <div className="w-[41px]  h-[42px] rounded-full border border-[#D8D8D8]">
                                        <FaPlus className="mt-3 ml-3" />
                                    </div>
                                    <div className="w-[41px]  h-[42px] rounded-full border border-[#D8D8D8]">
                                        <FaUpload className="mt-3 ml-3" />
                                    </div>
                                    <div className="w-[41px]  h-[42px] rounded-full border border-[#D8D8D8]">
                                        <FaCalendarAlt className="mt-3 ml-3" />
                                    </div>

                                </div>

                            </div>
                        </div>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-gray-600 border-b">
                                    <th className="p-2">Subject</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Start Date</th>
                                    <th className="p-2">End Date</th>
                                    <th className="p-2">Assigned User</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, i) => (
                                    <tr key={i} className=" ">
                                        <td className=""><FaStar /> {item.subject}</td>
                                        <td className="">
                                            <span className={`text-white text-xs px-2 py-1 rounded-full ${item.statusColor}`}>{
                                                item.status
                                            }</span>
                                        </td>
                                        <td className="p-2">{item.startDate}</td>
                                        <td className="p-2">{item.endDate}</td>
                                        <td className="p-2">{item.user}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-[#F2F2F5] p-4 rounded-2xl w-[382px] h-[344px] ml-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Metrics Breakdown</h2>
                            <div className="flex gap-2">
                                <div className="flex flex-row gap-2 ">
                                    <div className="w-[41px]  h-[42px] rounded-full border border-[#D8D8D8]">
                                        <FaPlus className="mt-3 ml-3" />
                                    </div>
                                    <div className="w-[41px]  h-[42px] rounded-full border border-[#D8D8D8]">
                                        <FaUpload className="mt-3 ml-3" />
                                    </div>
                                    <div className="w-[41px]  h-[42px] rounded-full border border-[#D8D8D8]">
                                        <FaCalendarAlt className="mt-3 ml-3" />
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="ml-4 ">
                                <div className="flex items-center justify-center border-[#239371]  border-[25px] rounded-full w-[106px] h-[106px]  font-bold text-black ">
                                    65%
                                </div>
                                <p className="text-center pt-2 text-[8px] w-28 text-gray-600">13 of 20 tasks resolved</p>
                            </div>
                            <div className=" ml-6">
                                <div className="flex items-center justify-center  border-[#83A2DB]  border-[25px] rounded-full w-[106px] h-[106px]  font-bold text-black ">
                                    25%
                                </div>
                                <p className="text-center pt-2 text-[8px] w-28 text-gray-600">5 tasks are currently in progress.</p>
                            </div >
                            <div className="ml-4">
                                <div className="flex items-center justify-center  border-[#FF474C]  border-[25px] rounded-full w-[106px] h-[106px]  font-bold text-black ">
                                    8%
                                </div>
                                <p className="text-center pt-2 text-[8px] w-28 text-gray-600">2 critical tasks overdue.</p>
                            </div>
                            <div className="ml-6">
                                <div className="flex items-center justify-center  border-[#FFB84F]  border-[25px] rounded-full w-[106px] h-[106px]  font-bold text-black ">
                                    2%
                                </div>
                                <p className="text-center pt-2 text-[8px] w-28 text-gray-600">1 task awaiting review.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ManagementHub;