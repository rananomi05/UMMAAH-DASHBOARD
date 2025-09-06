"use client";

import { PieChart, Pie, Cell } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const data = [
    { name: 'Quran Audio', value: 44, color: '#F95757' },
    { name: 'Mosque Finder', value: 24, color: '#31C48D' },
    { name: 'Daily Duas', value: 18, color: '#3B82F6' },
    { name: 'Kids Section', value: 14, color: '#FBBF24' },
]

export default function FeatureUsageCard() {
    return (
        <div className="bg-[#F2F2F5] rounded-[20px] p-4 shadow-sm w-[270px]  h-[265px] ">
            {/* Header */}
            <div className="flex flex-row items-center mb-2">
                <h1 className="font-semibold text-[20px] ">Feature Usage</h1>
                <div className="flex items-center space-x-1">
                    <span className="text-xs text-[#FFFFFF] font-bold ml-1 bg-[#EA6863] px-2 py-0.5 rounded-full">-5%</span>
                    <FontAwesomeIcon icon={faEllipsisVertical} className="text-[#000000] ml-[70px] font-bold" />
                </div>
            </div>
            <div className='flex flex-row items-center justify-evenly '>
                {/* Pie Chart & Center */}
                <div className="relative flex justify-center mr-6 items-center">
                    <PieChart width={140} height={140}>
                        <Pie
                            data={data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            outerRadius={50}
                            paddingAngle={4}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className="absolute text-center">
                        <h1 className="text-xl font-bold">4</h1>
                        <p className="text-xs text-gray-500">Features</p>
                    </div>
                </div>

                {/* Feature List */}
                <div className="mt-3 space-y-1 text-sm">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                                <span className='font-semibold text-[10px]'>{item.name}</span>
                            </div>
                            <div className="text-[#000000] font-semibold">
                                {item.value}% <span className="text-[#000000]"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
