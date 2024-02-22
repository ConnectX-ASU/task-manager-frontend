import React from 'react'

export default function TasksBoxes() {
  return (
	<section className='h-[400px] flex flex-col justify-between'>
		<div className="text-xl gradient1 flex flex-col justify-center items-center h-[180px] w-[300px] bg-[var(--primary)] rounded-xl boxShadow">
			X Tasks completed
		</div>
		<div className="text-xl gradient2 flex flex-col justify-center items-center h-[180px] w-[300px] bg-[var(--primary)] rounded-xl boxShadow">
			Y tasks in progress
		</div>
	</section>
  )
}
