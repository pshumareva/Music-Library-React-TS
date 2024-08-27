import { Link } from 'react-router-dom'
import { Album } from '../../interfaces/Props'

function DashboardCard({ asset }: { asset: Album }) {
 return (
  <li className="flex flex-wrap justify-center max-w-[23%] h-[600px] my-[25px] mx-auto bg-white shadow-[10px_10px_10px_10px_rgba(0,0,0,0.15)] hover:shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] transition-all hover:rounded-[5%]">
   <img src={asset.imageUrl} alt="travis" className='m-auto h-[290px] p-[30px]' />
   <p className='min-w-[90%] w-[70%] m-auto p-[5px] text-[21px] max-h-[50px] max-w-[30%] text-center text-black'>
    <strong className='float-left'>Singer/Band: </strong>
    <span className="float-right w-[50%] text-right">{asset.singer}</span>
   </p>
   <p className='min-w-[90%] w-[70%] m-auto p-[5px] text-[21px] max-h-[50px] max-w-[30%] text-center text-black'>
    <strong className='float-left'>Album name: </strong>
    <span className="float-right w-[50%] text-right">{asset.album}</span>
   </p>
   <p className='min-w-[90%] w-[70%] m-auto p-[5px] text-[21px] max-h-[50px] max-w-[30%] text-center text-black'>
    <strong className='float-left'>Sales:</strong>
    <span className="float-right w-[50%] text-right text-[21px">{asset.sales}</span>
   </p>
   <Link to={`/details/` + asset._id} className='block w-[150px] h-[40px] border-none bg-[#CBF6FF] text-black text-[18px] outline-none cursor-pointer text-center pt-[5px] font-bold' id={asset._id}>
    Details
   </Link>
  </li>
 )
}

export default DashboardCard
