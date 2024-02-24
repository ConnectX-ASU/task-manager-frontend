import React from 'react'
import LineChart from '../../components/Pages/statistics/LineChart';
import TasksInProgress from '../../components/Pages/Home/TasksInProgress';

const finishedTasks = [
	{
		name: '7agz kora',
		finishedAt: '2024-1-27',
		category: 'sports',
		type: 'solo',
	},
	{
		name: 'Gym workout',
		finishedAt: '2024-1-25',
		category: 'sports',
		type: 'group',
	},
	{
		name: 'Learn React',
		finishedAt: '2024-2-3',
		category: 'study',
		type: 'solo',
	},
	{
		name: 'Learn NodeJs',
		finishedAt: '2024-3-15',
		category: 'study',
		type: 'solo',
	},
	{
		name: 'Learn NodeJs',
		finishedAt: '2024-3-15',
		category: 'study',
		type: 'solo',
	},
	{
		name: 'Learn NodeJs',
		finishedAt: '2024-3-15',
		category: 'study',
		type: 'solo',
	},
	{
		name: 'wake up early',
		finishedAt: '2024-4-25',
		category: 'lifestyle',
		type: 'solo',
	},
	{
		name: 'Learn Cooking',
		finishedAt: '2024-6-25',
		category: 'lifestyle',
		type: 'group'
	},
	{
		name: 'Learn Cooking',
		finishedAt: '2024-2-19',
		category: 'lifestyle',
		type: 'group'
	},
	{
		name: 'Learn Cooking',
		finishedAt: '2024-3-19',
		category: 'ay 7aga',
		type: 'group'
	},
]

export default function Home() {
	return (
		<div className='py-8 px-16 space-y-10'>
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
		<LineChart finishedTasks={finishedTasks}/>
		<TasksInProgress/>
		</div>
	)
}
