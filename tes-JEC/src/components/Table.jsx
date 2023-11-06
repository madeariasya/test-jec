import React from 'react'
import arrow from '../assets/table/arrow.svg'
import arrowDua from '../assets/table/arrow 2.svg'
import ServiceUnit from './ServiceUnit'
import MaleIcon from '../assets/table/las la-male.svg'
import FemaleIcon from '../assets/table/las la-female.svg'
const data = [
    {
        docterName: "dr. Darwan M. Purba, Sp.M (k)",
        Pasien:[
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Eye Clinic',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "female",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Operating Theatre',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Operating Theatre',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
        ]
    },
    {
        docterName: "DR. dr. Iwan Soebijantoro, Sp.M (k)",
        Pasien:[
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Eye Clinic',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Operating Theatre',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Operating Theatre',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Internist Clinic',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Child Eye Care',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
            {
                noReg : "REG/OP/231002-0001",
                regDate: "Today",
                time: "10:50",
                medicalNo : "013-023-10-23",
                gender : "male",
                patienName : 'Fernando Riyo Simbolon(28)',
                serviceUnit : 'Operating Theatre',
                room : 'Lt.2 Room2D',
                phoneNo : '081323458123',
                bedNo : 'None',
                queNo : 'JH001',
                referralNo: '0342S0031120V003975',
                sepNo : '0342S0031120V003975'
            },
        ]
    }
]
const Table = () => {
  return (
    <div className='px-4 text-black text-sm font-light'>
        <div className='mt-8 w-full p-2 border border-solid border-gray-400'>
            <div className='flex items-center justify-between pb-5'>
                <div className='flex items-center'>
                    <p>Show</p>
                    <input type="number" className='border border-solid h-[full] border-gray-600 w-20 mx-2' />
                    <p>entries</p>
                </div>
                <div className='flex items-center'>
                    <p>Search: </p>
                    <input type="text" className='border border-solid border-gray-600 w-20 mx-2' />
                </div>
            </div>
            <table className="table-auto border-collapse p-2 border border-slate-500 text-sm font-thin text-left ">
                <thead>
                    <tr className='border-b border-slate-400'>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Registration No</p>
                            <img src={arrow} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Reg Date</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Time</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Medical No</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Patient Name</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Service Unit</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Room</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Phone No</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Bed No</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Que No</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Referral No</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>SEP No</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    <td className='p-2'>
                        <div className='flex justify-between'>
                            <p>Action</p>
                            <img src={arrowDua} alt="" />
                        </div>
                    </td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el,index) => (
                    <>
                        <tr className='bg-[#76BFAC4A]'  key={index}>
                            <td colSpan="13" className='px-4 py-4 text-[#0B6572]'>
                                <div className='flex'>
                                    <p className='mr-2 font-normal'>Doctor: </p>
                                    <p>{el.docterName}</p> 
                                </div>
                            </td>
                        </tr>
                        {el.Pasien.map((element,index) => (
                            <tr className=' border border-slate-400 font-normal' key={index}>
                                <td className='p-2 underline'>{element.noReg}</td>
                                <td className='p-2'>{element.regDate}</td>
                                <td className='p-2'>{element.time}</td>
                                <td className='p-2 text-[#25A0E2]'>{element.medicalNo}</td>
                                <td className='p-2'>
                                    <div className='flex'>
                                        {element.gender === "male"? (<img className='mr-2' src={MaleIcon} alt="" />) : (<img src={FemaleIcon} alt="" />)}
                                        <p>{element.patienName}</p>
                                    </div>
                                </td>
                                <td className='p-2'>
                                    <ServiceUnit data={element.serviceUnit}/>
                                </td>
                                <td className='p-2'>{element.room}</td>
                                <td className='p-2'>{element.phoneNo}</td>
                                <td className='p-2'>{element.bedNo}</td>
                                <td className='p-2'>{element.queNo}</td>
                                <td className='p-2'>{element.referralNo}</td>
                                <td className='p-2'>{element.sepNo}</td>
                                <td className='p-2'>...</td>
                            </tr>
                        ))}
                    </>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-between items-center pt-4 pb-2'>
                <p className='text-sm font-thin italic'>Showing 1 to 10 of 14 entires</p>
                <div>
                    <button className='p-2 border border-solid border-gray-400'>Previous</button>
                    <button className='p-2 border italic w-[34px] text-[#25A0E2] border-solid border-gray-400'>1</button>
                    <button className='p-2 border italic w-[34px] text-[#25A0E2] border-solid border-gray-400'>2</button>
                    <button className='p-2 border italic border-solid text-[#25A0E2] border-gray-400'>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table