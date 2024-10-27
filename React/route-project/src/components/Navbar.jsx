import React from 'react'

const Navbar = () => {
    {/*const  Linksdata =[
        {
        title:'Home',
        path: '/'
    },
    {
        tittle:'Products',
        path: '/'
    },
    {
        tittle: 'Contact',
        path : '/'
    }
]*/}
  return (
     <>
       <div className='w-screen h-14 shadow-purple-600 shadow-md flex flex-row justify-center items-center'>
           <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-600'>
                Max Store
            </div>
            <div className='w-[40%] flex justify-end items-center'>
               <ul className='w-full flex-row justify-end items-center gap-8 font-semibold'>
                   <li>Home</li>
                   <li>Products</li>
                   <li>Contact</li>
               </ul>
               {/*<div className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
                {Linksdata.map((link,index)=>(
                 <NavLink to={link.path}   
                ))}
               </div>*/}
            </div>
        </div>

     </>
  )
}

export default Navbar