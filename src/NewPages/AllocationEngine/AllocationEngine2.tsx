// import React, { useState } from 'react'
// import DateRange from './DateRange'
// import yellow from "../../assets/images/uparrowYellow.svg"
// import Red from "../../assets/images/uparrowRed.svg"
// import "./Custom.scss"
// import DashboardHeader from '../../components/DshboardHeader/DashboardHeader'
// import RedDownArrow from '../../assets/icons/red-down-shift.png'
// import shiftOrange from '../../assets/icons/shift-orange.svg'


// const AllocationEngine = () => {
//   const [b1, setB1] = useState(true)
//   const [b2, setB2] = useState(false)
//   const [del, setDel] = useState(true)
//   const [mum, setMum] = useState(false)
//   return (
//     <div className="p-10">
//       {/* <DateRange /> */}
//       <DashboardHeader/>
//       <div className="bg-gray-100 rounded-xl p-28 mt-5">
//         <div className=" w-full justify-between flex">
//           <div className=" flex">
//             <div className=" border-2 flex justify-between border-solid border rounded-xl">
//               <div
//                 onClick={() => { setB1(true); setB2(false) }}
//                 className={`text-center text-sm font-normal font-['DM Sans'] h-10 w-[57px] border-r-2 flex align-center justify-center items-center cursor-pointer ${b1 ? 'bg-gray-400 rounded-tl-xl rounded-bl-xl' : ''
//                   }`}
//               >
//                 B1
//               </div>
//               <div
//                 onClick={() => { setB1(false); setB2(true) }}
//                 className={`text-center text-sm font-normal font-['DM Sans'] h-10 w-[57px] border-r-2 flex align-center justify-center items-center cursor-pointer ${b2 ? 'bg-gray-400 ' : ''
//                   }`}
//               >
//                 B2
//               </div>
//               <div className="b3 text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-[57px] border-r-2 flex align-center justify-center items-center cursor-pointer">B3</div>
//               <div className="b4 text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-[57px] border-r-2 flex align-center justify-center items-center cursor-pointer">B4</div>
//               <div className="b5 text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-[57px] border-r-2 flex align-center justify-center items-center cursor-pointer">B5</div>
//               <div className="b6 text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-[57px] flex align-center justify-center items-center cursor-pointer">B6</div>
//             </div>
//             <div className="text-center border-2 border-blue-500 ml-3 text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-[57px] flex align-center justify-center items-center">WO</div>
//           </div>
//           <div className="border h-auto"></div>
//           <div className="w-1/2 flex justify-between">
//             <div
//               onClick={() => { setDel(true); setMum(false) }}
//               className={`text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-20 flex align-center justify-center items-center cursor-pointer ${del ? 'font-bold text-blue-700' : ''
//                 }`}
//             >
//               DEL
//             </div>
//             <div
//               onClick={() => { setDel(false); setMum(true) }}
//               className={`text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-20 flex align-center justify-center items-center cursor-pointer ${mum ? 'font-bold text-blue-700' : ''
//                 }`}
//             >
//               MUM
//             </div>
//             <div className="text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-20 flex align-center justify-center items-center  cursor-pointer">KOL</div>
//             <div className="text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-20 flex align-center justify-center items-center  cursor-pointer">BLR</div>
//             <div className="text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-20 flex align-center justify-center items-center  cursor-pointer">HYD</div>
//             <div className="text-center text-gray-400 text-sm font-normal font-['DM Sans'] h-10 w-20 flex align-center justify-center items-center  cursor-pointer">CHN</div>
//             <div className="  relative text-slate-500 ">
//               <select className="text-center rounded-lg h-10 w-[100px] flex items-center justify-between appearance-none select-none bg-inherit">
//                 <option className="h-8 w-full" value="Daily">Other</option>
//                 <option className="h-8 w-full" value="Weekly">PBR</option>
//                 <option className="h-8 w-full" value="Monthly">NED</option>
//               </select>
//               <div className="Arrow w-6 h-6 left-[72px] top-[8px] absolute"></div>
//             </div>
//           </div>
//         </div>
//         {b1 == true ?
//           <>
//             <div className="mt-3 p-3 rounded-xl shadow bg-white">
//               <div className=" flex flex-wrap justify-between items-center">
//                 <p className="text-gray-400 text-sm font-normal font-['DM Sans']">Exclusion Criteria</p>
//                 <div className="commonInput form-item">
//                   <input type="text" id="DPD" required />
//                   <label htmlFor="DPD">DPD</label>
//                 </div>
//                 <div className="commonInput form-item">
//                   <input type="text" id="minbal" required />
//                   <label htmlFor="minbal">Min. Bal.</label>
//                 </div>
//                 <div className="commonInput form-item">
//                   <input type="text" id="score" required />
//                   <label htmlFor="score">Score</label>
//                 </div>
//                 <div className="commonInput form-item">
//                   <input type="text" id="flag" required />
//                   <label htmlFor="flag">Flag</label>
//                 </div>
//                 <button className="text-gray-400 bg-blue-500 text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">Change/Add</button>
//               </div>
//             </div>
//             <div className="my-3 p-3 rounded-xl shadow bg-white">
//               <div className=" flex flex-wrap justify-between items-center">
//                 <p className="text-gray-400 text-sm font-normal font-['DM Sans']">Volumes (MTD)</p>
//                 <div className="commonBox">
//                   <p className="username">Total B1</p>
//                   <div className="flex items-center">
//                     <p className="amount">12,600</p>
//                     <img src={shiftOrange} alt="" />
//                     <p className="smText">+2% MOM</p>
//                   </div>
//                 </div>
//                 <div className="commonBox">
//                   <p className="username">Inhouse/ Exclusion</p>
//                   <div className="flex items-center">
//                     <p className="amount">15,000</p>
//                     <img src={shiftOrange} alt="" />
//                     <p className="smText">+2% MOM</p>
//                   </div>
//                 </div>
//                 <div className="commonBox">
//                   <p className="username">Allocated (MTD)</p>
//                   <div className="flex items-center">
//                     <p className="amount">900</p>
//                     <img className='h-[15px] w-[10px]' src={RedDownArrow} alt="" />
//                     <p className="smText">+2% MOM</p>
//                   </div>
//                 </div>
//                 <div className="commonBox">
//                   <p className="username">New Allocation (Today)</p>
//                   <div className="flex items-center">
//                     <p className="amount">10,200</p>
//                     <img className='h-[15px] w-[10px]' src={RedDownArrow} alt="" />
//                     <p className="smText">+2% MOM</p>
//                   </div>
//                 </div>
//                 <button className=" bg-[rebeccapurple] text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">Test Pipeline</button>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//               <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//                 <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">New Allocations: Recommended</p>
//                 <div className="w-full  rounded my-6">
//                   <table className="w-full table-auto">
//                     <thead>
//                       <tr>
//                         <th className="px-4 py-2"></th>
//                         <th className="px-4 py-2 border text-[12px]">DCA 1</th>
//                         <th className="px-4 py-2 border text-[12px]">DCA 2</th>
//                         <th className="px-4 py-2 border text-[12px]">DCA 3</th>
//                         <th className="px-4 py-2 border text-[12px]">DCA 4</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">Allocation</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">40%</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">5%</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">35%</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">20%</td>
//                       </tr>
//                       <tr>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">Volume</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">360</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">45</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">315</td>
//                         <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">180</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>

//               </div>
//               <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//                 <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">Impact Analysis</p>
//                 <div className="w-full  rounded my-6">
//                   <table className="w-full table-auto">
//                     <tbody>
//                       <tr>
//                         <td className="border-none px-4 py-2 text-black-400 text-sm font-normal font-['DM Sans']">Resolve Rate</td>
//                         <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] border">25%</td>
//                         <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] border flex"><img className='h-[15px] w-[10px] mt-0.5 mr-1' src={RedDownArrow} alt="" />-5% </td>
//                         <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] border">vs. Recommended</td>
//                       </tr>
//                       <tr>
//                         <td className="border-none px-4 py-2 text-black-400 text-sm font-normal font-['DM Sans']">cost</td>
//                         <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans']">$ XX</td>
//                         <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] flex"><img src={shiftOrange} alt="" className=' mr-1' /> +2%</td>
//                         <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans']">vs. Recommended</td>
//                       </tr>
//                       <tr>
//                         <td className=""></td>
//                         <td className=""></td>
//                         <td className=""></td>
//                         <td className="border-none px-4 py-2 text-blue-500 underline text-sm font-normal font-['DM Sans']">Approval Required</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//                 <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">Change Allocations</p>
//                 <div className="w-full  rounded my-6">
//                   <table className="w-full table-auto">
//                     <tbody>
//                       <tr>
//                         <td className="border-none px-4 py-2 text-blue-400 text-sm font-normal font-['DM Sans']">Allocation</td>
//                         <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">40%</td>
//                         <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">5%</td>
//                         <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">35%</td>
//                         <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">20%</td>
//                       </tr>
//                       <tr>
//                         <td className="border-none px-4 py-2 text-blue-400 text-sm font-normal font-['DM Sans']">Volume</td>
//                         <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">360</td>
//                         <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">45</td>
//                         <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">315</td>
//                         <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">180</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//                 <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">Exception Request</p>
//                 <p className="text-gray-500 text-sm font-normal font-['DM Sans'] mt-5">To maintain min. allocation for DCA2 to rebuild performance. DCA impacted by one off spike in attrition.  Performance monitoring initiated</p>
//               </div>
//             </div>
//           </> :
//           null
//         }
//         {b2 == true ?
//         <>
//           <div className="mt-3 p-3 rounded-xl shadow bg-white">
//           <div className=" flex flex-wrap justify-between items-center">
//             <p className="text-gray-400 text-sm font-normal font-['DM Sans']">Exclusion Criteria</p>
//             <div className="commonInput form-item">
//               <input type="text" id="DPD" required />
//               <label htmlFor="DPD">DPD</label>
//             </div>
//             <div className="commonInput form-item">
//               <input type="text" id="minbal" required />
//               <label htmlFor="minbal">Min. Bal.</label>
//             </div>
//             <div className="commonInput form-item">
//               <input type="text" id="score" required />
//               <label htmlFor="score">Score</label>
//             </div>
//             <div className="commonInput form-item">
//               <input type="text" id="flag" required />
//               <label htmlFor="flag">Flag</label>
//             </div>
//             <button className="text-gray-400 bg-blue-500 text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">Change/Add</button>
//           </div>
//         </div>
//         <div className="my-3 p-3 rounded-xl shadow bg-white">
//           <div className=" flex flex-wrap justify-between items-center">
//             <p className="text-gray-400 text-sm font-normal font-['DM Sans']">Volumes (MTD)</p>
//             <div className="commonBox">
//               <p className="username">Total B1</p>
//               <div className="">
//                 <p className="amount">18,923</p>
//                 <img src={shiftOrange} alt="" />
//                 <p className="smText">+8% MOM</p>
//               </div>
//             </div>
//             <div className="commonBox">
//               <p className="username">Inhouse/ Exclusion</p>
//               <div className="">
//                 <p className="amount">22,466</p>
//                 <img src={shiftOrange} alt="" />
//                 <p className="smText">+12% MOM</p>
//               </div>
//             </div>
//             <div className="commonBox">
//               <p className="username">Allocated (MTD)</p>
//               <div className="">
//                 <p className="amount">759</p>
//                 <img className='red' src={RedDownArrow} alt="" />
//                 <p className="smText">+34% MOM</p>
//               </div>
//             </div>
//             <div className="commonBox">
//               <p className="username">New Allocation (Today)</p>
//               <div className="">
//                 <p className="amount">10,200</p>
//                 <img className='red' src={RedDownArrow} alt="" />
//                 <p className="smText">+2% MOM</p>
//               </div>
//             </div>
//             <button className="text-gray-400 bg-blue-500 text-white rounded-xl  text-sm font-normal font-['DM Sans'] border-2 px-5 h-10">Test Pipeline</button>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//             <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">New Allocations: Recommended</p>
//             <div className="w-full  rounded my-6">
//               <table className="w-full table-auto">
//                 <thead>
//                   <tr>
//                     <th className="px-4 py-2"></th>
//                     <th className="px-4 py-2 border text-[12px]">DCA 1</th>
//                     <th className="px-4 py-2 border text-[12px]">DCA 2</th>
//                     <th className="px-4 py-2 border text-[12px]">DCA 3</th>
//                     <th className="px-4 py-2 border text-[12px]">DCA 4</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">Allocation</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">70%</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">23%</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">25%</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">87%</td>
//                   </tr>
//                   <tr>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">Volume</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">520</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">65</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">815</td>
//                     <td className="border-none px-4 py-2 text-gray-400 text-sm font-normal font-['DM Sans']">980</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//           </div>
//           <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//             <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">Impact Analysiss</p>
//             <div className="w-full  rounded my-6">
//               <table className="w-full table-auto">
//                 <tbody>
//                   <tr>
//                     <td className="border-none px-4 py-2 text-black-400 text-sm font-normal font-['DM Sans']">Resolve Rate</td>
//                     <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] border">55%</td>
//                     <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] border flex"><img src={shiftOrange} alt="" />-5% </td>
//                     <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] border">vs. Recommended</td>
//                   </tr>
//                   <tr>
//                     <td className="border-none px-4 py-2 text-black-400 text-sm font-normal font-['DM Sans']">cost</td>
//                     <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans']">$ XX</td>
//                     <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans'] flex"><img className='transform rotate-180' src={RedDownArrow} alt=""  /> +2%</td>
//                     <td className="border-none px-4 py-2 text-gray-500 text-sm font-normal font-['DM Sans']">vs. Recommended</td>
//                   </tr>
//                   <tr>
//                     <td className=""></td>
//                     <td className=""></td>
//                     <td className=""></td>
//                     <td className="border-none px-4 py-2 text-blue-500 underline text-sm font-normal font-['DM Sans']">Approval Required</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//             <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">Change Allocations</p>
//             <div className="w-full  rounded my-6">
//               <table className="w-full table-auto">
//                 <tbody>
//                   <tr>
//                     <td className="border-none px-4 py-2 text-blue-400 text-sm font-normal font-['DM Sans']">Allocation</td>
//                     <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">67%</td>
//                     <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">45%</td>
//                     <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">15%</td>
//                     <td className="px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans'] border">80%</td>
//                   </tr>
//                   <tr>
//                     <td className="border-none px-4 py-2 text-blue-400 text-sm font-normal font-['DM Sans']">Volume</td>
//                     <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">450</td>
//                     <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">85</td>
//                     <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">135</td>
//                     <td className="border-none px-4 py-2 text-red-500 text-sm font-normal font-['DM Sans']">80</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="col-span-1 lg:col-span-1 bg-white rounded-xl p-3 shadow">
//             <p className="text-gray-400 text-sm font-normal font-['DM Sans'] ">Exception Request</p>
//             <p className="text-gray-500 text-sm font-normal font-['DM Sans'] mt-5">To maintain min. allocation for DCA2 to rebuild performance. DCA impacted by one off spike in attrition.  Performance monitoring initiated</p>
//           </div>
//         </div>
//         </>  : null
//       }

//       </div>
//     </div>
//   )
// }

// export default AllocationEngine