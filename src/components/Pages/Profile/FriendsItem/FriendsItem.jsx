import React from 'react'

export default function FriendsItem({name, tasksCount}) {
  return (
    <div className='px-6 py-5 bg-[var(--secondary)] rounded-md flex justify-between'>
      <span>{name}</span> <span>{tasksCount} Tasks In Common</span>
    </div>
  )
}
