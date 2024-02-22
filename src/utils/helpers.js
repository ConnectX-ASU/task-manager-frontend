const getLastYearTasksCount = (finishedTasks) =>{
	let monthsCount = new Array(12).fill(0);
	finishedTasks.forEach((task)=>{
		const month = new Date(task.finishedAt).getMonth();
		if(new Date(task.finishedAt).getFullYear() === new Date().getFullYear())
			monthsCount[month]++;
	})
	return monthsCount;
}

const getLastMonthTasksCount = (finishedTasks) =>{
	const lastMonth = new Date().getMonth();
	let daysCount = new Array(30).fill(0);
	finishedTasks.forEach((task)=>{
		const date = new Date(task.finishedAt);
		if(date > lastMonth && date.getFullYear() === new Date().getFullYear() ) {
			const day = date.getDate();
			daysCount[day]++;
		}
	})
	return daysCount;
}

const getLastWeekTasksCount = (finishedTasks) =>{
	let lastWeek = new Date();
	lastWeek.setDate(lastWeek.getDate() - 7);

	let daysCount = new Array(7).fill(0);
	finishedTasks.forEach((task)=>{
		const date = new Date(task.finishedAt);
		if(date > lastWeek && date < new Date()) {
			const day = date.getDate();
			daysCount[new Date().getDate() - day]++;
		}
	})

	return daysCount.reverse();
}

const getCategories = (finishedTasks) =>{
	let categoriesCount = {};
	finishedTasks.forEach((task)=>{
		categoriesCount[task.category] = (categoriesCount[task.category] || 0) + 1
	})
	return categoriesCount;
}

module.exports = {
	getLastYearTasksCount,
	getLastMonthTasksCount,
	getLastWeekTasksCount,
	getCategories
}