import LoaderPng from '../../assets/images/loader.png'

const Loader = () =>{
    return(
        <div className="w-[100%] flex justify-center">
        <div className="w-[65%] h-[100vh] flex flex-col justify-start items-center">
            <img alt="loader" src={LoaderPng} />
            
               <div className="w-[100%] px-5 py-3 bg-white border-b border-gray-300 flex justify-center mt-10">
                 <p className=" text-gray-900 text-base font-medium leading-[21px]">Importing records...</p>
             </div>
             <div className="flex gap-3 mt-[230px] self-end">
             <button className='w-[87px] h-10 px-4 py-2.5 rounded-[100px] border border-[#6750A4] justify-center items-center inline-flex text-center text-[#6750A4] text-sm font-medium leading-tight '>Abort</button>
             <button className='w-[87px] h-10 px-4 py-2.5 rounded-[100px] bg-slate-500 border border-zinc-500 justify-center items-center inline-flex text-center text-white text-sm font-medium leading-tight'style={{ backgroundColor: '#6750A4' }}>Pause</button>
             </div>
        </div>
        </div>
    )
}

export default Loader