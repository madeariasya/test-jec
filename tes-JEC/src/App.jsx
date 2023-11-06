import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo-dark.svg'
import homeLogo from './assets/home.svg'
import arrowDown from './assets/arrow-drop-down-line.svg'
import arrowRight from './assets/chevron-right.svg'
import layout from './assets/layout.svg'
import svg from './assets/svg.svg'
import authentication from './assets/sidebar/authentication.svg'
import pages from './assets/sidebar/pages icon.svg'
import rocket from './assets/sidebar/rocket icon.svg'
import DarkSidebar from './components/DarkSidebar'
import ListIcon from './assets/nabvar/hamburger-icon.svg'
import SearchIcon from './assets/nabvar/search-icon.svg'
import Bell from './assets/nabvar/bx-bell.svg'
import Moon from './assets/nabvar/moon.svg'
import FullSize from './assets/nabvar/fullSize.svg'
import ErrorLogo from './assets/nabvar/bx-error.svg'
import Users from './assets/nabvar/User.svg'
import arrowRightGray from './assets/sidebar/chevron-right.svg'
import Statistic from './components/Statistic'
import Table from './components/Table'


const dataSideBarMenu = [{data:'Registration'},{data:'Appointment'} , {data:"Reminder"} , {data:'Crypto'} , {data:'Projects'} , {data:'NFT',isNew:true}]
function App() {

  return (
    <>
      <div className=' max-w-[1920px] h-[1670px] flex text-gray-100'>
        {/* Sidebar */}
          <div className=' max-w-[252px] w-[252px] h-full bg-gradient-to-b px-5 from-[#1998B4] to-[#41A47491]'>
            <div className='mt-[26px]'>
              <img src={logo} className='mx-auto' alt="" />
            </div>
            <div className='mt-[60px] w-[217px] mx-auto'>
              <p className='text-tes'>MENU</p>
              <div className='flex items-center justify-between mt-5'>
                <img src={homeLogo} className='w-[18px]' alt="" />
                <h5 className='text-test w-full pl-3'>Encounter</h5>
                <img src={arrowDown} alt="" />
              </div>
              {dataSideBarMenu.map( (el , index) => (
                <div className='flex items-center justify-between mt-3' key={index}>
                  <div className='w-[18px] text-center'>
                    -
                  </div>
                  <h5 className='text-test w-full pl-3'>{el.data}</h5>
                  {el.isNew === true && (
                    <p className='text-test bg-red-400 px-2 py-1 rounded-lg italic'>New</p>
                  )}
                </div>
              ))}
              <div className='flex items-center justify-between mt-5'>
                <img src={svg} className='w-[18px]' alt="" />
                <h5 className='text-test w-full pl-3'>Inpantient</h5>
                <img src={arrowRight} alt="" />
              </div>
              <div className='flex items-center justify-between mt-5'>
                <img src={layout} className='w-[18px]' alt="" />
                <h5 className='text-test w-full pl-3'>Layout</h5>
                <img src={arrowRight} alt="" />
              </div>
            <div>
            <div className='mt-[60px] w-[217px] mx-auto'>
                <DarkSidebar data="Authentication" icon={authentication}/>
                <DarkSidebar data="Pages" icon={pages}/>
                <DarkSidebar data="Landing" icon={rocket}/>
            </div>
            </div>
            </div>
          </div>
          <div className='w-full'>
            {/* Navbar */}
            <div className='w-full h-[70px] flex items-center border-b-2 border-solid justify-between border-gray-200'>
              <div className='flex items-center'>
              <div className='ml-8 mr-5'>
                <img src={ListIcon} alt="" />
              </div>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img src={SearchIcon} alt="" />
                </span>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-[247px] bg-gray-50 rounded border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search..."
                  />
              </label>
              <div className='ml-3 relative'>
                <img src={Bell} alt="" />
                <div>
                  <p className='absolute rounded-full text-xs text-white bg-red-500 px-1 top-[-0.5rem] left-4'>3</p>
                </div>
              </div>
            </div>
            <div className='flex h-full items-center'>
              <img src={FullSize} className='mr-6 py-5' alt="" />
              <img src={Moon} className='mr-6 py-5' alt="" />
              <div className='text-center mr-6 py-5'>
                <p className='text-black text-sm'>your ip address is:</p>
                <p className='text-[#25A0E2] bg-[#25A0E219] px-4 py-1 rounded-sm text-sm'>172.16.101.105</p>
              </div>
              <div className='p-2 h-full flex items-center bg-[#F3F3F9]'>
                  <img src={Users} className='h-[32px]' alt="" />
                  <div className='mx-2'>
                    <p className='text-black text-sm'>Budi Arifianto</p>
                    <p className='text-gray-400 text-sm'>IT ADMINISTRATOR</p>
                  </div>
              </div>
            </div>
          </div>
          <div className='h-full '>
            {/* Header */}
            <div className='flex h-[60px] items-center justify-between py-2  border-b-2 border-solid border-gray-200'>
                <h1 className='text-[#495057] text-2xl font-semibold ml-8'>Registration</h1>
                <div className='flex items-center mr-10'>
                  <h2 className='text-[#495057] text-xl font-light mr-3 ml-8'>Registration</h2>
                  <img className='mr-3' src={arrowRightGray} alt="" />
                  <h2 className='text-[#878A99] text-xl font-light'>Lists</h2>
                </div>
            </div>
            {/* Warning */}
            <div className='h-[60px] bg-warning-blue flex items-center'>
              <img src={ErrorLogo} className='px-3' alt="" />
              <p className='text-sm text-[#1C78AA]'> 1/6 : Info : DR. Dr. Waldensius Girsang, SpM (K), Tidak Praktek, 02-11 OKTOBER 2023, krn Symposium @amsterdam, 2/6 : Dr.Florence Tidak Praktek 19-28 Oktober 2023 Cuti Info Zr.Kristin.</p>
            </div>
            <Statistic/>
            <div className='flex items-center pl-4'>
                <p className='w-[11.375rem] border-b-2 border-solid border-[#25A0E2] text-basic py-3 text-center text-thin text-[#25A0E2]'>Registration</p>
                <p className='w-[11.375rem] border-b border-solid border-gray-300 text-basic py-3 italic text-center font-thin text-gray-700'>Registration</p>
                <p className='w-[11.375rem] border-b border-solid border-gray-300 text-basic py-3 italic text-center font-thin text-gray-700'>Registration</p>
            </div>
            <Table/>
          </div>
          
          </div>
      </div>
    </>
  )
}

export default App
