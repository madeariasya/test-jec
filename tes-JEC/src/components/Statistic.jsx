import React from 'react'
import UpIcon from '../assets/static/Group.svg'
import DownIcon from '../assets/static/arrow-down-circle-line.svg'
import SpaceShip from '../assets/static/space-ship-line.svg'
import Pendding from '../assets/static/pulse-line.svg'
import Money from '../assets/static/money.svg'
import Trophy from '../assets/static/trophy-line.svg'
import Service from '../assets/static/service-line.svg'
const data = [
    {
        title: "TOTAL REGISTRATION",
        isUp : true,
        isi: "197",
        icon: SpaceShip
    },
    {
        title: "PENDDING APPOINTMENT",
        isUp : true,
        isi: "20",
        icon: Pendding
    },
    {
        title: "PAYMENT COMPLETE",
        isUp : false,
        isi: "90%",
        icon: Money
    },
    {
        title: "OUTSTANDING B2B",
        isUp : true,
        isi: "10%",
        icon: Trophy
    },
    {
        title: "JOURNEY TIME",
        isUp : false,
        isi: "01:35:59",
        icon: Service
    },
]
const Statistic = () => {
  return (
    <div className='text-black grid grid-cols-5 mx-4 my-3'>
        {data.map((el,index) => (
            <div className='border border-gray-200 border-solid py-5 px-3' key={index}>
                <div className='flex justify-between items-center'>
                    <p className='text-gray-600 text-sm font-thin'>{el.title}</p>
                    {el.isUp === true ?(<img src={UpIcon} alt="" />):(<img src={DownIcon} alt="" />)}
                </div>
                <div className='flex items-center'>
                    <img src={el.icon} alt="" />
                    <p className='ml-4 text-xl font-thin'>{el.isi}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Statistic