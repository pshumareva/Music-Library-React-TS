import React from 'react'
import { Album } from '../../interfaces/Props';
import DashboardCard from './DashboardCard';

function PopulatedDashboard({ assets }: { assets: Album[] }) {
 return (
  <ul className='flex h-fit list-none flex-wrap mt-[50px]'>
   {assets.map((asset: any) => {
    return (
     <DashboardCard asset={asset} key={asset._id} />
    );
   })}
  </ul>
 )
}

export default PopulatedDashboard
