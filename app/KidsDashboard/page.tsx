import React from 'react'
import { FaCheck, FaCalendarAlt, FaPlus, FaBook, FaStar, FaEllipsisH, FaSearch, FaFolderOpen, FaHistory, FaPrayingHands, FaUser, FaPencilAlt, FaUpload, FaRegClock } from 'react-icons/fa';
import { HiBookOpen } from 'react-icons/hi';
import { MdFeedback } from 'react-icons/md';
import Navbar from '../Components/Navbar';




export default function KidsDashboard() {
    return (
        <div>
            <Navbar />
            <div className='ml-66 mt-5 font-lufga'>
                <div className='flex flex-row'>
                    <div className="flex flex-row gap-4 mt-11 ">
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
                    <div className='ml-109'>
                        <h1 className='text-[21px] font-bold  ml-4 mt-4'>Books & Stories</h1>
                        <div className='w-[170px] ml-3 h-[50px] p-2 rounded-[21px] text-white bg-[#239371]'>
                            <h1 className='pt-2 pl-10'>Trending →</h1>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-[21px] font-bold ml-4 mt-4'>Lectures & Duas</h1>
                        <div className='w-[170px] ml-5 h-[50px] p-2  rounded-[21px] text-white bg-[#EA6863]'>
                            <h1 className=' pt-2 pl-4'>Needs Attention →</h1>

                        </div>
                    </div>
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-col '>
                        <h1 className='w-[312px] text-[54px] pt-2 font-bold'>Kids Corner Dashboard</h1>

                        <div className='w-[312px] h-[618px] px-5 rounded-[27px] text-white bg-[#83A2DB]'>
                            <div className='flex flex-row'>
                                <div>
                                    <h1 className='text-[21px] pt-3'> General</h1>
                                    <h1 className='text-[15px] pt-2'> Files Uploaded:</h1>
                                    <h1 className='text-[50px] '> 24</h1>


                                </div>
                                <div className="w-[43px]  mt-5 ml-30 h-[44px] rounded-full border border-white">
                                    <FaPencilAlt className="mt-3 ml-3" />
                                </div>
                            </div>
                            <div className='flex flex-row gap-4  '>
                                <div className='w-[125px] h-[60px] text-[15px] p-2 bg-[#0000001A] rounded-[21px] '>
                                    <h1>Files Uploades:</h1>
                                    <h1>Active Uploade</h1>


                                </div>
                                <div className='w-[125px] h-[60px] text-[13px] p-2 bg-[#0000001A] rounded-[21px] '>
                                    <h1>Completion Rate:</h1>
                                    <h1>78%</h1>


                                </div>
                            </div>

                            <div className='w-[258px] h-[384px] p-3 bg-[#0000001A] mt-3 rounded-[23px] '>
                                <div className='flex flex-row'>
                                    <h1 className='text-[21px]'>Details</h1>
                                    <div className="w-[43px]   ml-30 h-[44px] rounded-full border border-white">
                                        <FaPencilAlt className="mt-3 ml-3" />
                                    </div>
                                </div>
                                <h1 className='text-[16px]'>📊 Content Stats</h1>
                                <div className='flex flex-row gap-4 mt-2'>
                                    <div className='w-[117px] h-[37px] rounded-[21px] border border-white border-[2px] text-center pt-2'>
                                        <h1 className='text-[13px]'>Books Uploaded</h1>
                                    </div>
                                    <div className='w-[86px] h-[37px] rounded-[21px] bg-white text-[#EA6863] border border-white border-[2px] text-center  '>
                                        <h1 className='text-[29px]'> 215</h1>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4 mt-2'>
                                    <div className='w-[117px] h-[37px] rounded-[21px] border border-white border-[2px] text-center pt-2'>
                                        <h1 className='text-[13px]'>Lectures Uploaded</h1>
                                    </div>
                                    <div className='w-[86px] h-[37px] rounded-[21px] bg-white text-[#EA6863] border border-white border-[2px] text-center  '>
                                        <h1 className='text-[29px]'> 130</h1>
                                    </div>
                                </div> <div className='flex flex-row gap-4 mt-2'>
                                    <div className='w-[117px] h-[37px] rounded-[21px] border border-white border-[2px] text-center pt-2'>
                                        <h1 className='text-[13px]'>Duas Uploaded</h1>
                                    </div>
                                    <div className='w-[86px] h-[37px] rounded-[21px] bg-white text-[#EA6863] border border-white border-[2px] text-center  '>
                                        <h1 className='text-[29px]'> 95</h1>
                                    </div>
                                </div>
                                <h1 className='text-[16px] pt-1'>📈 Top Contributors</h1>
                                <div className='flex flex-row gap-4 mt-2'>
                                    <div className='w-[90px] h-[37px] rounded-[21px] border border-white border-[2px] text-center pt-2'>
                                        <h1 className='text-[13px]'>Most Books</h1>
                                    </div>
                                    <div className='w-[124px] h-[37px] ml-3 rounded-[21px] bg-white text-[#239371] border border-white border-[2px] text-center  '>
                                        <h1 className='text-[17px] pt-1'> Ali Khan</h1>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4 mt-2'>
                                    <div className='w-[104px] h-[37px] rounded-[21px] border border-white border-[2px] text-center pt-2'>
                                        <h1 className='text-[13px]'>Most Lectures</h1>
                                    </div>
                                    <div className='w-[124px] h-[37px] rounded-[21px] bg-white text-[#239371] border border-white border-[2px] text-center  '>
                                        <h1 className='text-[17px] pt-1'>Fatima Noor</h1>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4 mt-2'>
                                    <div className='w-[66px] h-[37px] rounded-[21px] border border-white border-[2px] text-center pt-2'>
                                        <h1 className='text-[10px]'>Most Duas</h1>
                                    </div>
                                    <div className='w-[124px] h-[37px] ml-8 rounded-[21px] bg-white text-[#239371] border border-white border-[2px] text-center  '>
                                        <h1 className='text-[17px] pt-1'> Ahmed Raza</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="flex items-end justify-between mt-3 px-4 py-2">
                            {/* Books */}
                            <div className="flex flex-col items-center">
                                <div className="text-[10px] text-center mb-2">
                                    <p>Books (15% Engagement)</p>
                                    <p>48 Days</p>
                                    <p>(Engaging steadily)</p>
                                </div>
                                <div className="bg-green-600 w-[155px] h-[25px]  rounded-full"></div>
                            </div>

                            {/* Line */}
                            <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-red-400 mx-2"></div>

                            {/* Lectures */}
                            <div className="flex flex-col items-center">
                                <div className="text-[10px] text-center mb-2">
                                    <p>Lectures (-8% Engagement)</p>
                                    <p>24 Days</p>
                                    <p>(Needs Improvement)</p>
                                </div>
                                <div className="bg-red-400 w-[155px] h-[25px] rounded-full"></div>
                            </div>

                            {/* Line */}
                            <div className="flex-1 h-1 bg-gradient-to-r from-red-400 to-gray-200 mx-2"></div>

                            {/* Duas */}
                            <div className="flex flex-col items-center">
                                <div className="text-[10px] text-center mb-2">
                                    <p>Duas (-10% Drop)</p>
                                    <p>36 Days</p>
                                    <p>(Low activity)</p>
                                </div>
                                <div className="bg-gray-200 w-[155px] h-[25px]  rounded-full"></div>
                            </div>

                            {/* Remaining line and faded circles */}
                            <div className="flex-1 h-1 bg-gray-200 mx-2"></div>

                            <div className="flex flex-col items-center">
                                <div className="bg-gray-200 w-[155px] h-[25px]  rounded-full opacity-40"></div>
                            </div>

                            <div className="flex-1 h-1 bg-gray-200 mx-2"></div>

                            <div className="flex flex-col items-center">
                                <div className="bg-gray-200 w-[55px] h-[25px] rounded-full opacity-40"></div>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className=' ml-3'>
                                <div className='w-[77px] h-[44px] rounded-[17px] bg-[#000000] text-white text-center pt-2 ml-5 mt-9'>
                                    <HiBookOpen className='w-[74px] h-[34px]' />
                                </div>
                                <h1 className='w-[83px] text-[15px] font-semibold pl-8 pt-2'>Books Upload</h1>
                            </div>
                            <div className=' '>
                                <div className='w-[77px] h-[44px] rounded-[17px] border border-[#BFBFBF] border-[2px]  text-center pt-2 ml-5 mt-9'>
                                    <FaUser className='w-[74px] h-[24px]' />
                                </div>
                                <h1 className='w-[83px] text-[15px] font-semibold pl-8 pt-2'>Lectures Upload</h1>
                            </div>
                            <div className=' '>
                                <div className='w-[77px] h-[44px] rounded-[17px] border border-[#BFBFBF] border-[2px] text-center pt-2 ml-5 mt-9'>
                                    <FaPrayingHands
                                        className='w-[74px] h-[24px]' />
                                </div>
                                <h1 className='w-[83px] text-[15px] font-semibold pl-8 pt-2'>Duas Upload</h1>
                            </div>
                            <div className=''>
                                <div className='w-[77px] h-[44px] rounded-[17px] border border-[#BFBFBF] border-[2px] text-center pt-2 ml-5 mt-9'>
                                    <FaHistory className='w-[74px] h-[24px]' />
                                </div>
                                <h1 className='w-[83px] text-[15px] font-semibold pl-8 pt-2'>Activity Log</h1>
                            </div>
                            <div className="">
                                <div className='w-[77px] h-[44px] rounded-[17px]  border border-[#BFBFBF] border-[2px] text-center pt-2 ml-5 mt-9'>
                                    <FaFolderOpen className='w-[74px] h-[24px]' />
                                </div>
                                <h1 className='w-[83px] text-[15px] font-semibold pl-8 pt-2'>Files</h1>
                            </div>
                            <div className=' '>
                                <div className='w-[77px] h-[44px] rounded-[17px]  border border-[#BFBFBF] border-[2px] text-center pt-2 ml-5 mt-9'>
                                    <MdFeedback className='w-[74px] h-[24px]' />
                                </div>
                                <h1 className='w-[83px] text-[15px] font-semibold pl-8 pt-2'>Feedback</h1>
                            </div>
                            <div className="w-[52px] ml-28 mt-9 h-[53px] rounded-full border border-black">
                                <FaPlus className="mt-4 ml-4" />
                            </div>

                        </div>
                        <div className='w-[743px] h-[45px] ml-5 mt-9 rounded-[17px]  bg-[#F2F2F5]  pt-2'>
                            <h1 className='text-[#9A9A9A] text-[18px] pl-3'>Add a note, @description for your upload here...</h1>
                        </div>

                        <div className='w-[743px] h-[458px] ml-5 mt-3 rounded-[27px]  bg-[#F2F2F5]  p-4'>
                            <div className='flex flex-row gap-4'>
                                <h1 className='text-[21px] font-semibold'>Focus</h1>
                                <div className="flex flex-row gap-4 ml-120  ">
                                    <div className="w-[32px]  h-[33px] rounded-full border border-black">
                                        <FaPlus className="mt-2 ml-2" />
                                    </div>
                                    <div className="w-[32px]  h-[33px]  rounded-full border border-black">
                                        <FaUpload className="mt-2 ml-2" />
                                    </div>
                                    <div className="w-[32px]  h-[33px]  rounded-full border border-black">
                                        <FaCalendarAlt className="mt-2 ml-2" />
                                    </div>

                                </div>
                            </div>
                            <div className=' flex flex-row w-[700px] h-[35px] mt-3 rounded-[17px]  bg-[#FFFFFF]  pt-2'>
                                <span className='pl-4 pt-1' >
                                    <FaSearch /></span>
                                <h1 className='text-[#9A9A9A] text-[18px] pl-10'>Search</h1>

                            </div>
                            <div className='w-[720px] h-[165px] mt-3 rounded-[21px]  bg-[#FFFFFF]  pt-2'>
                                <div className='flex flex-row gap-4'>
                                    <div className="w-[52px]  ml-2 h-[53px] rounded-full bg-[#F2F2F5] ">
                                        <HiBookOpen className="mt-3 ml-[10px] h-[34px] w-[34px]" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[21px] font-semibold'>Books Upload Progress</h1>
                                        <h1 className='text-[15px] text-[#9A9A9A]'>Review the uploaded book files for accuracy.</h1>
                                    </div>
                                    <div className='flex flex-row w-[188px] h-[52px] rounded-[17px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1 ml-10'>
                                        <div className='w-[41px] h-[41px] rounded-full bg-[#239371] mb-2  text-white'>
                                            <FaCheck className="pr-4 pt-2 h-[36px] w-[61px]" />
                                        </div>
                                        <h1 className='text-[13px ] pt-2 '>Check as complete</h1>
                                    </div>
                                    <div className="w-[52px]  h-[53px] ml-4 rounded-full border border-black">
                                        <FaEllipsisH className="mt-4 ml-4" />
                                    </div>
                                </div>
                                <hr className='mt-4 text-[#9A9A9A] w-[680px] ml-4' />
                                <div className='flex flex-row gap-4 mt-2'>
                                    <div className='flex flex-row ml-5 w-[160px] h-[62px] rounded-[20px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1'>
                                        <div className="w-[41px]  ml-2 h-[41px] rounded-full bg-[#F2F2F5] ">
                                            <FaFolderOpen className="mt-2 ml-[6px] h-[24px] w-[34px]" />
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <h1 className='text-[14px] pt-2'>Upload Type</h1>
                                            <div className='w-[46px] h-[11px] bg-[#239371] rounded-[16px] text-white mt-1 ml-2'>
                                                <h1 className='text-[10px]'>Books</h1>
                                            </div>


                                        </div>
                                    </div>
                                    <div className='flex flex-row ml-2 w-[160px] h-[62px] rounded-[20px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1'>
                                        <div className="w-[41px]  ml-2 h-[41px] rounded-full bg-[#F2F2F5] ">
                                            <FaUpload className="mt-2 ml-[6px] h-[24px] w-[34px]" />
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <h1 className='text-[14px] pt-2'>Files Uploaded</h1>
                                            <div className='w-[66px] h-[11px] bg-[#83A2DB] rounded-[16px] text-white mt-1 ml-2'>
                                                <h1 className='text-[10px]'>10 Files</h1>
                                            </div>


                                        </div>
                                    </div>

                                    <div className='flex flex-row ml-2 w-[160px] h-[62px] rounded-[20px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1'>
                                        <div className="w-[41px]  ml-2 h-[41px] rounded-full bg-[#F2F2F5] ">
                                            <FaRegClock className="mt-2 ml-[6px] h-[24px] w-[34px]" />
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <h1 className='text-[14px] pt-2'>Duration</h1>
                                            <div className='w-[76px] h-[11px] bg-[#EA6863] rounded-[16px] text-white mt-1 ml-2'>
                                                <h1 className='text-[10px]'>45 Minutes</h1>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='w-[720px] h-[165px] mt-3 rounded-[21px]  bg-[#FFFFFF]  pt-2'>
                                <div className='flex flex-row gap-4'>
                                    <div className="w-[52px]  ml-2 h-[53px] rounded-full bg-[#F2F2F5] ">
                                        <FaUser className="mt-3 ml-[10px] h-[34px] w-[34px]" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[21px] font-semibold'>Lectures Upload Progress</h1>
                                        <h1 className='text-[15px] text-[#9A9A9A]'>Complete the review of uploaded lectures.</h1>
                                    </div>
                                    <div className='flex flex-row w-[188px] h-[52px] rounded-[17px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1 ml-10'>
                                        <div className='w-[41px] h-[41px] rounded-full bg-[#239371] mb-2  text-white'>
                                            <FaCheck className="pr-4 pt-2 h-[36px] w-[61px]" />
                                        </div>
                                        <h1 className='text-[13px] pt-2 '>Check Upload Status</h1>
                                    </div>
                                    <div className="w-[52px]  h-[53px] ml-4 rounded-full border border-black">
                                        <FaEllipsisH className="mt-4 ml-4" />
                                    </div>
                                </div>
                                <hr className='mt-4 text-[#9A9A9A] w-[680px] ml-4' />
                                <div className='flex flex-row gap-4 mt-2'>
                                    <div className='flex flex-row ml-5 w-[160px] h-[62px] rounded-[20px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1'>
                                        <div className="w-[41px]  ml-2 h-[41px] rounded-full bg-[#F2F2F5] ">
                                            <FaFolderOpen className="mt-2 ml-[6px] h-[24px] w-[34px]" />
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <h1 className='text-[14px] pt-2'>Upload Type</h1>
                                            <div className='w-[56px] h-[11px] bg-[#239371] rounded-[16px] text-white mt-1 ml-2'>
                                                <h1 className='text-[10px]'>Books</h1>
                                            </div>


                                        </div>
                                    </div>
                                    <div className='flex flex-row ml-2 w-[160px] h-[62px] rounded-[20px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1'>
                                        <div className="w-[41px]  ml-2 h-[41px] rounded-full bg-[#F2F2F5] ">
                                            <FaUpload className="mt-2 ml-[6px] h-[24px] w-[34px]" />
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <h1 className='text-[14px] pt-2'>Files Uploaded</h1>
                                            <div className='w-[66px] h-[11px] bg-[#83A2DB] rounded-[16px] text-white mt-1 ml-2'>
                                                <h1 className='text-[10px]'>10 Files</h1>
                                            </div>


                                        </div>
                                    </div>

                                    <div className='flex flex-row ml-2 w-[160px] h-[62px] rounded-[20px]  border border-[#BFBFBF] border-[2px] text-center pt-1 pl-1'>
                                        <div className="w-[41px]  ml-2 h-[41px] rounded-full bg-[#F2F2F5] ">
                                            <FaRegClock className="mt-2 ml-[6px] h-[24px] w-[34px]" />
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <h1 className='text-[14px] pt-2'>Duration</h1>
                                            <div className='w-[70px] h-[11px] bg-[#EA6863] rounded-[16px] text-white mt-1 ml-2'>
                                                <h1 className='text-[10px]'>45 Minutes</h1>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
