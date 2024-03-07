import React, {useState} from 'react'
import * as Yup from 'yup';
import {useFormik} from 'formik';
import Input from '../../Shared/Input/Input';
import toast from 'react-hot-toast';
import endpoints from '../../../server/config';
import axios from 'axios';

const validationSchema = Yup.object({
	name: Yup.string().required('Task name is required'),
	description: Yup.string(),
	priority: Yup.string().oneOf(["low", "medium", "high"]),
	deadline: Yup.date().min(new Date().toISOString().slice(0, 10), 'Deadline cannot be in the past'),
	category: Yup.string().required(),
	points: Yup.number().required().oneOf([1,2,3,5,8,13,21]),
	estimatedTime: Yup.number(),
	subtasks: Yup.array(),
});

export default function CreateTaskForm({setShow}) {
	const [currentTask, setCurrentTask] = useState('');
	const [loading,setLoading] = useState(false)
	const [subtasks,setSubtasks] = useState([]);

	let formik = useFormik({
		initialValues: {
			name: '',
			description: '',
			priority: 'low',
			deadline: new Date().toISOString().slice(0, 10),
			category: '',
			points: 1,
			estimatedTime: 3,
			subtasks: [],
		},
		validationSchema,
		onSubmit: handleSubmit
	})

	async function handleSubmit(){
		const data = {
			...formik.values
		}

		try{
			setLoading(true)
			const valid = validationSchema.validateSync(data);
			if(!valid)
			{
				throw new Error('Invalid Data');
			}
			const res = await axios.post(endpoints.tasks, data);
			if(res.status === 201)
			{
				toast.success("Task Created!");
			}
			setLoading(false)
		}catch(e)
		{
			console.error(e);
			setLoading(false)
		}
	}

	function handleSubtasks(task){
		if(task.length>0)
		{
			setSubtasks([...subtasks,task]);
			formik.handleChange({target: {name: 'subtasks', value: [...subtasks,task]}});
			setCurrentTask('');
			toast.success("Subtask Added");
		}
	}
	return (
	<form onSubmit={formik.handleSubmit}>
					<div className="grid grid-cols-2 gap-x-8 gap-y-2 relative">
						<Input type="text" name="name" value={formik.values.name} error={formik.errors.name} onChange={formik.handleChange} />
						<Input type="text" name="description" value={formik.values.description} onChange={formik.handleChange} />
						<div className='flex flex-col'>
							<label htmlFor="priority" className='text-start text-[var(--lightblue)] mb-2'>Priority</label>
							<select className='py-1 px-2 rounded-sm bg-[var(--primary)] cursor-pointer hover:bg-[var(--secondary)] ' id='priority'>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
							</select>
						</div>
						<Input type="number" name="points" value={formik.values.points} error={formik.errors.points} onChange={formik.handleChange} />
						<Input type="text" name="category" value={formik.values.category} error={formik.errors.category} onChange={formik.handleChange} />
						<Input type="date" name="deadline" value={formik.values.deadline} error={formik.errors.deadline} onChange={formik.handleChange} />
						<Input type="text" name="estimatedTime" placeholder="Estimated Time in Days" value={formik.values.estimatedTime} onChange={formik.handleChange} />
					</div>
					<Input type="text" name="subTasks" placeholder="Subtasks" value={currentTask} onChange={e => setCurrentTask(e.target.value)} />
					<div className='cursor-pointer bg-[var(--lightblue)] text-black px-6 py-2 rounded-lg mb-2 hover:bg-sky-600 w-full' onClick={() => handleSubtasks(currentTask)}>Add Subtask</div>
					<div className="flex justify-center gap-4 mt-6">
						<button type='submit' className='bg-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-700 me-4' >{loading? "Loading..." : "Submit"}</button>
						<button className='bg-[var(--red)] px-6 py-2 rounded-lg hover:bg-red-600' onClick={() => setShow(false)}>Cancel</button>
					</div>
				</form>
)
}
