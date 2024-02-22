import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'
import {getLastMonthTasksCount, getLastWeekTasksCount, getLastYearTasksCount} from '../../../utils/helpers';

const options = {
	elements: {
		point: {
			pointRadius: 3,
			hoverRadius: 5,
			backgroundColor: 'rgb(77, 177, 230)',
			fill: true
		}
	},
	plugins: {
		legend: {
			display: false
		}
	},
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
		grid: {
			display: false,
		},
		},
		y: {
		grid: {
			display: false,
		},
		beginAtZero: true,
		},
	  },
}
const linearBgGradient = (c) =>{
	const bgColor = [
		'rgba(157, 165, 169, 0.2)',
		'rgba(157, 165, 169, 0)',
	]
	if(!c.chart.chartArea)
		return;
	const {ctx, chartArea: {top,bottom}} = c.chart;
	const gradientBg = ctx.createLinearGradient(0,top,0,bottom);
	const tr =1/(bgColor.length - 1);
	for(let i = 0; i < bgColor.length;i++)
	{
		gradientBg.addColorStop(0 + i*tr, bgColor[i]);
	}
	return gradientBg
}

export default function LineChart({finishedTasks}) {
	const [filter, setFilter] = useState('weekly');

	const yearlyData = 	{
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: 'Completed Tasks',
				data: getLastYearTasksCount(finishedTasks),
				borderColor: 'rgb(77, 177, 230)',
				pointBackgroundColor: 'rgb(77, 177, 230)',
				backgroundColor: (c)=>{
					return linearBgGradient(c)
				},
				fill: true,
				tension: 0.4,
			}
		],
	};

	const monthlyData = {
		labels: Array.from(Array(30).keys()),
		datasets: [
			{
				label: 'Completed Tasks',
				data: getLastMonthTasksCount(finishedTasks),
				borderColor: 'rgb(77, 177, 230)',
				pointBackgroundColor: 'rgb(77, 177, 230)',
				backgroundColor: (c)=>{
					return linearBgGradient(c)
				},
				fill: true,
				tension: 0.4,
			}
		]
	}
	const weeklyData = {
		labels: ["Last Week", "Last Week", "Last Week", "Last Week", "Last Week", "Yesterday", "Today"],
		datasets: [
			{
				label: 'Completed Tasks',
				data: getLastWeekTasksCount(finishedTasks),
				borderColor: 'rgb(77, 177, 230)',
				pointBackgroundColor: 'rgb(77, 177, 230)',
				backgroundColor: (c)=>{
					return linearBgGradient(c)
				},
				fill: true,
				tension: 0.4,
			}
		]
	}

  return (
	<div className='w-full bg-[var(--primary)] rounded-xl p-6 px-2 sm:px-6 boxShadow'>
		<div className="flex flex-row justify-between gap-4 items-center p-4">
			<h2 className="text-2xl font-semibold ">Completed Tasks</h2>
			<div className="buttons text-xs sm:text-base flex flex-col sm:flex-row gap-4">
				<button onClick={()=>setFilter("weekly")} className={`hover:text-[var(--lightblue)] font-semibold transition-all transition-duration-100 ${filter==='weekly' && 'text-[var(--lightblue)] underline underline-offset-[10px]'}`}>Weekly</button>
				<button onClick={()=>setFilter("monthly")} className={`hover:text-[var(--lightblue)] font-semibold transition-all transition-duration-100 ${filter==='monthly' && 'text-[var(--lightblue)] underline underline-offset-[10px]'}`}>Monthly</button>
				<button onClick={()=>setFilter("yearly")} className={`hover:text-[var(--lightblue)] font-semibold transition-all transition-duration-100 ${filter==='yearly' && 'text-[var(--lightblue)] underline underline-offset-[10px]'}`}>Yearly</button>
			</div>
		</div>
		<div className="h-[300px]">
			<Line data={filter==='yearly' ? yearlyData : filter==='monthly' ? monthlyData : weeklyData} options={options} />
		</div>
	</div>
  )
}
