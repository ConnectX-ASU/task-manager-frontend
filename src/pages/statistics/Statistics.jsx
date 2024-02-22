import React from 'react'
import 'chart.js/auto';

import BarChart from '../../components/Pages/statistics/BarChart';
import Box from '../../components/Shared/Box/Box';
import PieChart from '../../components/Pages/statistics/PieChart';
import LineChart from '../../components/Pages/statistics/LineChart';
import TasksBoxes from '../../components/Pages/statistics/TasksBoxes';

//Dummy Data for sprint 1
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

export default function Statistics() {

	return (
			<div className='py-8 px-16'>
				<h1 className='text-3xl font-semibold'>Statistics</h1>
				<div className='py-8 flex flex-row flex-wrap gap-8 justify-start items-center'>
					<LineChart finishedTasks={finishedTasks} />
					<Box width={400} height={400}>
						<PieChart finishedTasks={finishedTasks} />
					</Box>
					<Box width={250} height={400}>
						<BarChart />
					</Box>
					<TasksBoxes/>
				</div>
			</div>
	)
}
