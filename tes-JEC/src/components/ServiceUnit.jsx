import React from 'react'

const ServiceUnit = ({data}) => {
    console.log(data);
  return (
    <>
        {data === "Eye Clinic" && (
            <p className='bg-[#32CCFF1A] px-2 py-1 rounded-md text-[#32CCFF]'>{data}</p>
        )}
        {data === "Operating Theatre" && (
            <p className='bg-[#FFF8E6] px-2 py-1 rounded-md text-[#E89951]'>{data}</p>
        )}
        {data === "Internist Clinic" && (
            <p className='bg-[#7448F01A] px-2 py-1 rounded-md text-[#4B38B3]'>{data}</p>
        )}
        {data === "Child Eye Care" && (
            <p className='bg-[#F672A72B] px-2 py-1 rounded-md text-[#F672A7]'>{data}</p>
        )}
    </>
  )
}

export default ServiceUnit