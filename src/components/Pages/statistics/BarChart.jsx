import React from 'react'
import {Bar} from 'react-chartjs-2'

export default function BarChart() {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		barThickness: 80,
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
	const data = {
		labels: ['Task Type'],
		datasets: [
			{
				label: 'Solo',
				data: [65],
				fill: true,
				backgroundColor: 'rgba(77, 176, 229,0.7)',
			},
			{
				label: 'Group',
				data: [28],
				fill: true,
				backgroundColor: 'rgba(245, 59, 100, 0.7)',
			}
		]
	}
  return (
		<Bar data={data}  options={options}/>
  )
}
