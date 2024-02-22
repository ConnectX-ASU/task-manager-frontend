import React from 'react'
import {Pie} from 'react-chartjs-2'
import {getCategories} from '../../../utils/helpers';

const pieOptions = {
	maintainAspectRatio: false,
	responsive: true,
	scales: {
		x: {
			display: false,
		},
		y: {
			display: false,
		},
	},
}

export default function PieChart({finishedTasks}) {

		const categories = getCategories(finishedTasks);
		const labels = Object.keys(categories);
		const data = Object.values(categories);
		const pieData = {
			labels,
			datasets: [{
				label: 'Tasks Categories',
				data,
				backgroundColor: [
					'rgb(77,176,229)',
					'#555eab',
					'#c98d83',
					'#bdd869',
				],
				borderWidth: 0,
				hoverOffset: 10
			}]
		}

  return (
	<>
		<Pie data={pieData} options={pieOptions}/>
		<span className='text-sm opacity-20 font-sans'>Tasks Categories</span>
	</>
  )
}
