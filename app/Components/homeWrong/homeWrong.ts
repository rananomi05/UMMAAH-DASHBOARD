// 'use client';
// import image from './Assets/NavbarLogos/Group 4174@2x.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faEllipsisVertical, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
// import FeatureCharts from './FeatureCharts';
// import dynamic from 'next/dynamic';


// const FeatureCharts = dynamic(() => import('./FeatureCharts'), {
//     ssr: false,
// });

// export default function Home() {
//     // const FeatureCharts = dynamic(() => import('./FeatureCharts'), {
//     //     ssr: false,
//     // });
//     return (

//             <div className="p-4 font-lufga sm:ml-64">
//                 <div className="p-4   rounded-lg  mt-6">
//                     <div className='flex flex-row'>
//                         <div className='w-[777px] h-[332px] bordar -2 border-gray-300 rounded-[27px] bg-[#F2F2F5]'>
//                             <div className='flex flex-row'>
//                                 <div>
//                                     <h1 className='text-[#000000] font-bold pt-5 pl-5 '>Live User Stats</h1>
//                                     <div className='w-[234px] h-[267px] flex flex-col text-center text-[#000000] bg-[#FFFFFF] mt-1 ml-3 rounded-[19px] p-4'>
//                                         <h1 className='font-semibold text-sm'>Active Users Right Now</h1>
//                                         <h1 className='font-bold text-base mt-1'>Total: 5,236 Users</h1>

//                                         {/* Red circle with icon */}
//                                         <div className='w-[97px] h-[97px] rounded-full bg-[#EA6863] mx-auto mt-4 flex items-center justify-center'>
//                                             <img src={image.src} alt="icon" className='w-[39px] h-[42px]' />
//                                         </div>

//                                         {/* Peak Time and Limit */}
//                                         <div className='mt-4 flex flex-row gap-x-1 justify-center'>
//                                             <div className='w-[111px] h-[47px] bg-[#F2F2F5]  rounded-[14px] px-2 py-1 text-left'>
//                                                 <h1 className='text-xs text-center'>Peak Time</h1>
//                                                 <h1 className='font-bold text-sm text-center'>00:57:56</h1>
//                                             </div>
//                                             <div className="w-[111px] h-[47px] bg-[#F2F2F5] rounded-[14px] px-2 py-1 text-left">
//                                                 <p className="text-xs text-center">Limit</p>
//                                                 <p className="font-bold text-sm ">6,000 Users</p>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <div className='flex flex-row font-lufga'>
//                                         <h1 className='text-[#000000] font-bold pt-5 pl-5 '>Key Metrics</h1>
//                                         <p className='pt-5 pl-10 text-[#83A2DB]'>Manage</p>
//                                     </div>
//                                     <div className='w-[234px] h-[267px] font-lufga flex flex-col text-left text-[#000000] bg-[#FFFFFF] mt-1 ml-3 rounded-[19px] p-4'>
//                                         <p className='font-semibold'>Links <span className='border border-[#BFBFBF] rounded-[4px] px-1 py-1 '>3</span></p>
//                                         <div className='w-[213px] mt-2 h-[58px] bg-[#F2F2F5] border border-[#239371] rounded-[14px] px-2 py-1'>
//                                             <h1 className='font-bold font-lufga  text-[15px] '>Total Views Today <span className='ml-10'><FontAwesomeIcon icon={faStar} className="" /></span></h1>
//                                             <h1 className='text-[11px] pt-2'>12,560 views <span className='text-[#239371] ml-[64px]'>+8%</span></h1>
//                                         </div>
//                                         <div className='w-[213px] mt-3 h-[58px] bg-[#F2F2F5]   rounded-[14px] px-2 py-1'>
//                                             <h1 className='font-bold font-lufga text-[15px] '>App Crashes Detected <span className='ml-3'><FontAwesomeIcon icon={faStar} className="" /></span></h1>
//                                             <h1 className='text-[11px] pt-2'>5 crashes <span className=' ml-[50px]'>Critical: 2</span></h1>
//                                         </div>
//                                         <div className='w-[213px] mt-3 h-[58px] bg-[#F2F2F5]   rounded-[14px] px-2 py-1'>
//                                             <h1 className='font-bold font-lufga text-[15px] '>Errors Logged <span className='ml-[70px]'><FontAwesomeIcon icon={faStar} className="" /></span></h1>
//                                             <h1 className='text-xs pt-2'>Login API latency <span className=' text-[#EA6863] ml-[40px]'>120 errors</span></h1>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div>
//                                     <div className='flex flex-row font-lufga'>
//                                         <h1 className='text-[#000000] font-bold text-20px pt-5 pl-5 '>Feature Trends</h1>
//                                         <p className='pt-5 pl-10 text-[#83A2DB]'>View all</p>
//                                     </div>
//                                     <div className="w-[234px] h-[267px] grid grid-cols-2 grid-rows-2 gap-2 font-lufga text-[#000000] bg-[#FFFFFF] mt-1 ml-3 rounded-[19px] p-4">

//                                         <div className="w-[108px] h-[125px] font-semibold text-left bg-[#000000] text-[#FFFFFF] rounded-[6px]">
//                                             <div className="ml-2">
//                                                 <h1 className="text-[15px]">AM</h1>
//                                                 <h1 className="text-[15px]">10:00</h1>
//                                                 <h1 className="text-[25px]">+15%</h1>
//                                                 <h1 className="text-[12px]">Feature Boost:</h1>
//                                                 <h1 className="text-[15px]">Quran Audio</h1>
//                                             </div>
//                                         </div>


//                                         <div className="w-[108px] h-[125px] font-semibold text-left bg-[#F2F2F5] ml-2 rounded-[6px] flex items-center justify-center">
//                                             <div className="ml-2">
//                                                 <h1 className="text-[15px]">PM</h1>
//                                                 <h1 className="text-[15px]">01:00</h1>
//                                                 <h1 className="text-[25px]">-7%</h1>
//                                                 <h1 className="text-[12px]">Drop Alert</h1>
//                                                 <h1 className="text-[13px]">Mosque Finder</h1>
//                                             </div>
//                                         </div>


//                                         <div className="w-[108px] h-[125px] font-semibold text-left bg-[#F2F2F5] mt-2  rounded-[6px] flex items-center justify-center">
//                                             <div className="ml-2">
//                                                 <h1 className="text-[15px]">PM</h1>
//                                                 <h1 className="text-[15px]">04:30</h1>
//                                                 <h1 className="text-[25px]">-5%</h1>
//                                                 <h1 className="text-[12px]">Decline</h1>
//                                                 <h1 className="text-[13px]">Hadith Section</h1>
//                                             </div>
//                                         </div>


//                                         <div className="w-[108px] h-[125px] font-semibold text-left bg-[#F2F2F5] ml-2 mt-2 rounded-[6px] flex items-center justify-center">
//                                             <div className="ml-2">
//                                                 <h1 className="text-[15px]">PM</h1>
//                                                 <h1 className="text-[15px]">03:00</h1>
//                                                 <h1 className="text-[25px]">+12%</h1>
//                                                 <h1 className="text-[12px]">Spike</h1>
//                                                 <h1 className="text-[13px]">Daily Duas</h1>
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>
//                         <div className='ml-4 mt-2'>
//                             <h1 className='text-[#000000] font-bold text-[20px] '>Active Users <span className='bg-[#239371] text-[15px] font-semibold text-white  rounded-[7px]'>+12%</span> <span><FontAwesomeIcon icon={faEllipsisVertical} className="text-[20px] ml-[70px]" /></span></h1>
//                             <h1 className='font-bold text-[35px]'>+83 <span className='text-[#BFBFBF]'>%</span> </h1>
//                             <h1 className=" text-[15px]">Uptime</h1>
//                             <h1 className="font-bold text-[17px]">
//                                 Error Rate: 1.2% (Goal: &lt;1%)
//                             </h1>
//                             <h1 className="font-bold text-[25px]">
//                                 Daily Traffic Growth
//                             </h1>
//                             <div className='flex flex-row gap-x-2 '>
//                                 <div className="w-[53px] h-[150px] font-bold text-white text-center bg-[#239371] rounded-[10px]">
//                                     <h1 className='pt-[96px]'>+12%</h1>
//                                     <h1>MON</h1>
//                                 </div>
//                                 <div className="w-[53px] h-[150px] font-bold text-white text-center bg-[#EA6863] rounded-[10px]">
//                                     <h1 className='pt-[96px]'> -5%</h1>
//                                     <h1>TUE</h1>
//                                 </div>
//                                 <div className="w-[53px] h-[150px] font-bold text-white text-center bg-[#83A2DB] rounded-[10px]">
//                                     <h1 className='pt-[96px]'>-1%</h1>
//                                     <h1>WED</h1>
//                                 </div>
//                                 <div className="w-[53px] h-[150px] font-bold text-[#000000] text-center bg-[#F2F2F5] rounded-[10px]">
//                                     <h1 className='pt-[96px]'>0%</h1>
//                                     <h1>THU</h1>
//                                 </div>
//                                 <div className="w-[53px] h-[150px] font-bold text-[#000000] text-center bg-[#F2F2F5] rounded-[10px]">
//                                     <h1 className='pt-[96px]'>0%</h1>
//                                     <h1>FRI</h1>
//                                 </div>


//                             </div>

//                         </div>
//                     </div>
//                     <div className=" flex flex-row">
//                         <div>

//                             <div className='mt-2 flex flex-row  items-center'>
//                                 <h1 className='font-bold text-[25px]'>Performance Breakdown</h1>
//                                 <div className='w-[345px] h-[45px] ml-[100px] font-semibold  bg-[#F2F2F5] rounded-[27px] flex flex-row justify-between items-center px-4 mt-2'>
//                                     <h1 className='text-[17px]'>Today</h1>
//                                     <div className='w-[75px] h-[34px] bg-[#000000] rounded-[23px] flex items-center justify-center'>
//                                         <h1 className='text-white text-[17px]'>Week</h1>
//                                     </div>
//                                     <h1 className='text-[17px]'>Month</h1>
//                                     <h1 className='text-[17px]'>Year</h1>

//                                 </div>
//                             </div>

//                             <div className='flex flex-row gap-x-1 mt-4 '>
//                                 <div className='w-[151px] h-[445px] rounded-[18px] bg-[#F2F2F5] '>
//                                     <h1 className='text-[30px] font-bold pt-2 text-center'>MON 9</h1>
//                                     <div className='w-[118px] h-[375px] bg-[#FFFFFF] ml-4 flex flex-col  rounded-[23px]  mt-2'>
//                                         <h1 className='text-[25px] font-bold pt-2 text-center'>User Activity</h1>
//                                         <h1 className='text-[15px] w-[69px] pt-[145px] pl-3'>Sessions: <br /><span className='font-semibold'>7,893</span> </h1>
//                                         <h1 className='text-[15px] w-[69px] pt-3 pl-3'>Avg Duration:  <br /><span className='font-semibold'>3m 15s</span> </h1>

//                                     </div>
//                                 </div>
//                                 <div className='w-[151px] h-[445px] rounded-[18px] bg-[#F2F2F5] '>
//                                     <h1 className='text-[30px] font-bold pt-2 text-center'>TUE 10</h1>
//                                     <div className='w-[118px] h-[375px] bg-[#FFFFFF] ml-4 flex flex-col  rounded-[23px]  mt-2'>
//                                         <h1 className='text-[25px] font-bold pt-2 text-center'>TUE 10</h1>
//                                         <h1 className='text-[15px] w-[69px] pt-[165px] pl-3'>Quran Recitation:  <br /><span className='font-semibold'>62%</span> </h1>
//                                         <h1 className='text-[15px] w-[69px] pt-3 pl-3'>Prayer Times:   <br /><span className='font-semibold'>20%</span> </h1>

//                                     </div>
//                                 </div>
//                                 <div className='w-[151px] h-[445px] rounded-[18px] bg-[#F2F2F5] '>
//                                     <h1 className='text-[30px] font-bold pt-2 text-center'>WED 11</h1>
//                                     <div className='w-[118px] h-[375px] bg-[#FFFFFF] ml-4 flex flex-col  rounded-[23px]  mt-2'>
//                                         <h1 className='text-[25px] font-bold pt-2 text-center'>Low Features</h1>
//                                         <h1 className='text-[15px] w-[69px] pt-[125px] pl-3'>Community Events:
//                                             <br /><span className='font-semibold'>9% </span> </h1>
//                                         <h1 className='text-[15px] w-[69px] pt-3 pl-3'>Guides Section : <span className='font-semibold'>5%</span> </h1>

//                                     </div>
//                                 </div>
//                                 <div className='w-[151px] h-[445px] rounded-[18px] bg-[#F2F2F5] '>
//                                     <h1 className='text-[30px] font-bold pt-2 text-center'>THU 12</h1>
//                                     <div className='w-[118px] h-[375px] bg-[#FFFFFF] ml-4 flex flex-col  rounded-[23px]  mt-2'>
//                                         <h1 className='text-[25px] font-bold pt-2 text-center'>Crash Reports</h1>
//                                         <h1 className='text-[15px] w-[69px] pt-[220px] pl-3'>Affected  <br /><span className='font-semibold'>7,893</span> </h1>
     
                                   </div>
//                                 </div>
    
//                                 <div className='w-[151px] h-[445px] rounded-[18px] bg-[#F2F2F5] '>
//                                       <h1 className='text-[30px] font-bold pt-2 text-center'>FRI 13</h1>
//                                     <div className='w-[118px] h-[375px] bg-[#FFFFFF] ml-4 flex flex-col  rounded-[23px]  mt-2'>
//                                         <h1 className='text-[25px] font-bold pt-2 text-center'>System Updates</h1>
//                                         <h1 className='text-[15px] w-[69px] pt-[200px] pl-3'>Bug fixes & optimizations<br /><span className='font-semibold'></span> </h1>


//                                     </div>
//                                 </div>
    
                           </div>
   
 //                         </div>
//                         <div className='flex flex-col mt-3 ml-4 '>
//                             <div>
//                                 <FeatureCharts />
//                             </div>'
                        
                    <div>
                        <div className="bg-[#F2F2F5] rounded-[27px]  p-4  w-[270px] h-[228px]  mt-3">
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="font-semibold text-[18px]">Quick Fix</h1>
                                <div className="flex items-center space-x-1">
                                    <FontAwesomeIcon icon={faTriangleExclamation} className="text-[#000000] mr-[130px] text-sm" />
                                              <FontAwesomeIcon icon={faEllipsisVertical} className="text-[#000000] font-bold" />
                                </div>
                            </div>
                     */}
{/* Fix Rows */ }
{/* <div className="space-y-4   text-sm">
                        <div className="w-[250px] h-[66px] bg-[#FFFFFF] rounded-[18px] ">
                            <div className='flex flex-row  '>
                                <h2 className="text-[35px] pl-3 font-semibold text-[#000000]">9:30 <span className="text-[#BFBFBF] font-bold">AM</span></h2>
                                <p className="text-[13px] text-[#239371] pl-[60px] pt-4 font-bold">Low</p>
                            </div>
                        <p className="text-[13px] pl-3 pb-4 font-semibold">Investigate login errors.</p>
                    </div>
                <div className="w-[250px] h-[66px] bg-[#FFFFFF] rounded-[18px] ">
                                                                                                       <div className='flex flex-row  '>
                    <h2 className="text-[35px] pl-3 font-semibold text-[#000000]">4:15 <span className="text-[#BFBFBF] font-bold">PM</span></h2>
                        <p className="text-[13px] text-[#EA6863] pl-[60px] pt-4 font-bold">High</p>
                    </div>
                <p className="text-[13px] pl-3  font-semibold">Deploy updated app version 3.2.</p>
            </div > 
        </div>                                 
                                      
                            </div>    
                        </div>    
                    </div>    
                          

              </div > 
            </div >   
                                               


        
           
} */}
