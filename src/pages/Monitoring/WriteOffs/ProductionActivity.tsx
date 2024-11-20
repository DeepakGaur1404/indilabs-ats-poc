import React from 'react'
import Sidebar from '../../../components/common/Sidebar'
import DashboardHeader from '../../../components/DshboardHeader/DashboardHeader'
import SubTabs from '../../../components/SubTabs/SubTabs'
import { Outlet } from 'react-router-dom'
import Button from '../../../components/Button'

type Props = {}

const ProductionActivity = (props: Props) => {
    const reviewHotspots = ()=>{}
  return (
  //   <>
  //   <Sidebar
  //     layout={
  //       <>
  //       <div className="px-[6px] lg:px-[59px] lg:pt-[59px] bg-[#fafafb] flex flex-col gap-5">
  //           <DashboardHeader />
  //           <SubTabs
  //             isDropDown={true}
  //             tabs={["Volume", "Activity", "Outcome"]}
  //             page="production"
  //           />
  //         </div>
  //         <div className="flex flex-wrap  items-start  justify-center gap-7 p-[6px] lg:px-[59px] bg-[#fafafb]">
  //           <div className="w-full flex-col lg:flex-row flex items-start justify-between lg:gap-10 flex-wrap">
           
  //           </div>
  //           <div className="w-full flex items-center justify-end gap-5 mt-8">
  //           <button className=" self-end w-20 h-10 px-4 py-2.5 rounded-3xl border border-zinc-500  text-center text-slate-500 text-sm font-medium ">
  //             Back
  //           </button>
  //           <Button
  //             onClick={reviewHotspots}
  //             width="200px"
  //             height="40px"
  //             fontSize="14px"
  //             padding="5px"
  //             borderRadius="30px"
  //           >
  //             Review Hotspots
  //           </Button>
  //         </div>
  //         </div>
  //       </>
  //     }
  //   />
  // </>
  <>Activity</>
  )
}

export default ProductionActivity