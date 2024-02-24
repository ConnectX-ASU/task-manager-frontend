import React from 'react'
import {MdOutlineDateRange, MdTaskAlt} from 'react-icons/md'

export default function Hometask({task}) {

	function markAsFinished() {
		// TODO
	}

return (
	<div>
		<div className='bg-[var(--primary)] rounded-md p-4 md:p-6 flex flex-row justify-around boxShadow hover:scale-[1.02] transition-all duration-50'>
        <div onClick={markAsFinished} className='flex flex-col items-center gap-2 cursor-pointer hover:text-[var(--green)] w-fit text-sm'>
			<MdTaskAlt size={24}/>
			Mark as Finished
        </div>
        <div className="flex flex-col justify-between items-start w-1/2 gap-2">
			<h2 className='text-base md:text-2xl font-bold'>Task Name</h2>
			<div className="flex flex-row gap-4 md:gap-8 w-full text-xs">
			<div className="hidden md:flex flex-row gap-1">
				<MdOutlineDateRange/>
				<p> Started at: 12-3-2024</p>
				</div>
				<div className="flex flex-row gap-1">
				<MdOutlineDateRange/>
				<p> Deadline: 16-3-2024</p>
				</div>
			</div>
			</div>
			<div className='flex flex-col gap-4 items-center'>
			<p>50% Completed</p>
			<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-[var(--lightblue)] h-2.5 rounded-full" style={{width: "50%"}}></div>
			</div>
			</div>
		</div>
		</div>
	)
}
