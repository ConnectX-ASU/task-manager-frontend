import React from 'react'

export default function Box({children, width, height}) {
  return (
	<div className={`bg-[var(--primary)] ${height?`h-[${height}px]`:"h-full"} ${width?`w-[${width}px]`:"w-full"} p-8 rounded-xl boxShadow flex flex-col justify-center items-center`}>
		{children}
	</div>
  )
}
