import arrowRight from '../assets/sidebar/chevron-right.svg'
const DarkSidebar = ({data , icon}) => {
  return (
    <div className='flex items-center justify-between mt-5 text-[#6D7080]'>
        <img src={icon} className='w-[18px]' alt="" />
        <h5 className='text-test w-full pl-3'>{data}</h5>
        <img src={arrowRight} alt="" />
    </div>
  )
}

export default DarkSidebar