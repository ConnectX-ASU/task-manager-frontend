import React from 'react'

export default function TasksInfo() {
	return (
		<div className="flex flex-row gap-8">
			<div className="boxShadow gradient3 flex flex-col w-1/3 justify-center items-center gap-6 p-6 bg-[var(--primary)] rounded-xl boxShadow">
				<h1 className='text-xl font-semibold'>Tasks Completed</h1>
				<h2>7</h2>
			</div>
			<div className="boxShadow gradient4 flex flex-col w-1/3 justify-center items-center gap-6 p-6 bg-[var(--primary)] rounded-xl boxShadow">
				<h1 className='text-xl font-semibold'>Tasks In Progress</h1>
				<h2>2</h2>
			</div>
			<div className="boxShadow gradient3 flex flex-col w-1/3 justify-center items-center gap-6 p-6 bg-[var(--primary)] rounded-xl boxShadow">
				<h1 className='text-xl font-semibold'>Tasks To Do</h1>
				<h2>4</h2>
			</div>
		</div>
	)
}
