import React from 'react'
import Hometask from './Hometask'

export default function TasksInProgress() {
	return (
	<div className="flex flex-col gap-4">
        <h1 className='text-xl font-semibold text-start'>Tasks in progress</h1>
        <Hometask/>
        <Hometask/>
        <Hometask/>
    </div>
	)
}
