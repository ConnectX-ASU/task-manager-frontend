import React, {useState} from 'react'
import CreateTaskForm from './CreateTaskForm';


export default function CreateTaskModal() {
	const [show,setShow] = useState(false);

	return (
	<>
		<button className='bg-[var(--main)] px-6 py-2 rounded-lg fixed bottom-6 right-6' onClick={() => setShow(true)}>Create Task</button>
		{show &&
		<div className="fixed left-0 top-0 bg-black bg-opacity-70 w-screen h-screen flex justify-center items-center " onClick={() => setShow(false)}>
			<div className="bg-[var(--primary)] flex flex-col rounded shadow-md  p-8 w-3/4 md:w-1/2" onClick={e => e.stopPropagation()}>
				<h1 className="text-2xl font-bold mb-4">Create Task</h1>
				<CreateTaskForm setShow={setShow}/>
			</div>
		</div>
		}
	</>
	)
}
