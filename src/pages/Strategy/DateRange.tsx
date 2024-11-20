import React from 'react'

const DateRange = () => {
    return (
        <div className='shadow p-[16px] rounded-xl'>
            <div className="w-full flex flex-col md:flex-row md:justify-between">
                <div>
                    <span className="text-black text-lg font-bold font-['DM Sans']">Portfolio:</span>
                    <span className="text-black text-lg font-normal font-['DM Sans'] ml-1">Personal Loan</span>
                </div>
                <div>
                    Tabs
                </div>
                <div>
                    <span className="text-black text-sm font-bold">Last synced:</span>
                    <span className="text-black text-sm font-normal"> 19/05/2023 04:00pm</span>
                </div>
            </div>
            <div className="self-stretch pt-5 flex flex-wrap justify-start xl:justify-between  items-center gap-5 ">
                <div className="min-w-[18%]  justify-start items-center gap-2 flex">
                    <div className="px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex bg-orange-100 ">
                        <img className="w-10 h-10" src="/static/media/Vector.7c15bd473a1097217c2d3debe50a7199.svg" alt="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-gray-400 text-sm font-normal font-['DM Sans']">Total Book</div>
                        <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">$2,500M</div>
                    </div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAYAAAAYucG/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgBzcQxEQAACAJA4Axi/1K4WUNj8MPD3haLFl5gxBxlBQTMA/PT6AAAAABJRU5ErkJggg==" alt="" className="m-auto" />
                </div>
                <div className="min-w-[18%]  justify-start items-center gap-2 flex">
                    <div className="px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex bg-violet-100 ">
                        <img className="w-10 h-10" src="/static/media/Vector2.96eca584a778a53648094fd6d54427e1.svg" alt="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-gray-400 text-sm font-normal font-['DM Sans']">Total Deliquency</div>
                        <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">$2,500M</div>
                    </div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAYAAAAYucG/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgBzcQxEQAACAJA4Axi/1K4WUNj8MPD3haLFl5gxBxlBQTMA/PT6AAAAABJRU5ErkJggg==" alt="" className="m-auto" />
                </div>
                <div className="min-w-[18%]  justify-start items-center gap-2 flex">
                    <div className="px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex bg-emerald-100 ">
                        <img className="w-10 h-10" src="/static/media/Save.c160237275193ae6a6b4dbd26dfee697.svg" alt="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-gray-400 text-sm font-normal font-['DM Sans']">2+Deliquency</div>
                        <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">$2,500M</div>
                    </div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAYAAAAYucG/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgBzcQxEQAACAJA4Axi/1K4WUNj8MPD3haLFl5gxBxlBQTMA/PT6AAAAABJRU5ErkJggg==" alt="" className="m-auto" />
                </div>
                <div className="min-w-[18%]  justify-start items-center gap-2 flex">
                    <div className="px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex bg-blue-100 ">
                        <img className="w-10 h-10" src="/static/media/Gross.69e255a4387fd3055a5226894ff2905c.svg" alt="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-gray-400 text-sm font-normal font-['DM Sans']">Gross WO</div>
                        <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">$2,500M</div>
                    </div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAYAAAAYucG/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgBzcQxEQAACAJA4Axi/1K4WUNj8MPD3haLFl5gxBxlBQTMA/PT6AAAAABJRU5ErkJggg==" alt="" className="m-auto" />
                </div>
                <div className="min-w-[18%]  justify-start items-center gap-2 flex">
                    <div className="px-2 py-1.5  rounded-lg justify-start items-start gap-2.5 flex bg-rose-100 ">
                        <img className="w-10 h-10" src="/static/media/Recovery.99a690ad4a1c629ff5fd00c1d62e8917.svg" alt="" />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-gray-400 text-sm font-normal font-['DM Sans']">Gross Recovery</div>
                        <div className="text-black text-base font-normal font-['DM Sans'] tracking-wide">$2,500M</div>
                    </div>
                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAYAAAAYucG/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgBzcQxEQAACAJA4Axi/1K4WUNj8MPD3haLFl5gxBxlBQTMA/PT6AAAAABJRU5ErkJggg==" alt="" class="m-auto" /> */}
                </div>
            </div>
        </div>
    )
}

export default DateRange