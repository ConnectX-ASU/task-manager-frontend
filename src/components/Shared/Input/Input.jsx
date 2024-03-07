import React from 'react'

export default function Input({type, value, onChange, error,  name, placeholder}) {
	return (
	<div className='flex flex-col '>
        <label htmlFor={name} className='text-start text-[var(--lightblue)] '>
            {placeholder || name}
        </label>
		<input
            type={type}
    	    value={value}
            onChange={onChange}
			className='mb-2 p-2 bg-transparent border-b-2 border-[var(--lightblue)] active:outline-none focus:outline-none'
            name={name}
            id={name}
		/>
		{error && <span className='text-xs text-start text-red-500'>{error}</span>}
	</div>
	)
}
