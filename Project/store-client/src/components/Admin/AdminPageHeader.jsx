import React from 'react'

const AdminPageHeader = ({title}) => {
  return (
    <div className='h-10 w-full justify-start items-center font-bold text-2xl text-purple-500'>
        {title}
    </div>
  )
}

export default AdminPageHeader