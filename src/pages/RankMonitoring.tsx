import React from "react";

type Props = {};

const RankMonitoring = (props: Props) => {
  return (
    <>
      <div className="w-[356px] h-[917px] p-4 bg-violet-50 rounded-xl shadow flex-col justify-start items-start gap-3 inline-flex">
        <div className="px-2 py-1 bg-white rounded border border-slate-400 justify-center items-center gap-1 inline-flex">
          <div className="text-black text-[13px] font-normal">
            STEP 1: Monitoring & DIagnostics
          </div>
        </div>
        <div className="h-[116px] px-3 py-2 bg-white rounded-xl shadow flex-col justify-start items-center gap-1 flex">
          <div className="flex-col justify-center items-center flex">
            <div className="text-yellow-400 text-[32px] font-medium">05</div>
            <div className="text-black text-sm font-medium">Hotspots</div>
          </div>
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="w-3.5 h-3.5 relative">
              <div className="w-3.5 h-3.5 left-0 top-0 absolute bg-zinc-300" />
            </div>
            <div className="text-black text-[10px] font-normal tracking-tight">
              +2 vs last month
            </div>
          </div>
          <div className="text-gray-400 text-xs font-normal leading-[18px] tracking-tight">
            Potential risk: $250k
          </div>
        </div>
        <div className="h-[354px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex">
          <div className="h-[78px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-between items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-medium">
                Risk Monitoring
              </div>
              <div className="px-3 py-1 rounded-[100px] justify-center items-center gap-1 flex">
                <div className="px-1 justify-center items-center flex">
                  <div className="text-center text-slate-500 text-xs font-medium leading-tight tracking-tight">
                    Review
                  </div>
                </div>
                <div className="w-[18px] h-[18px] relative" />
              </div>
            </div>
            <div className="self-stretch p-3 bg-white border-t border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-400 text-xs font-normal leading-[18px]">
                Metrics
              </div>
              <div className="w-[58px] text-center text-gray-400 text-xs font-normal leading-[18px]">
                Jul
              </div>
              <div className="w-[58px] text-center text-gray-400 text-xs font-normal leading-[18px]">
                Jun
              </div>
            </div>
          </div>
          <div className="self-stretch h-[252px] border-gray-100 flex-col justify-start items-start flex">
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Portfolio
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="text-gray-900 text-sm font-normal leading-[21px]">
                Performance
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Distribution
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Production
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Agency
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Watchlist
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[324px] h-[354px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex">
          <div className="self-stretch grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-between items-center gap-2 inline-flex">
              <div className="text-black text-sm font-medium">Hotspots</div>
              <div className="px-3 py-1 rounded-[100px] justify-center items-center gap-1 flex">
                <div className="px-1 justify-center items-center flex">
                  <div className="text-center text-slate-500 text-xs font-medium leading-tight tracking-tight">
                    Review
                  </div>
                </div>
                <div className="w-[18px] h-[18px] relative" />
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-0.5 flex">
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="text-black text-sm font-normal">Entry %</div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-9 flex">
                      <div className="text-black text-xs font-normal">6%</div>
                      <div className="text-black text-xs font-normal">4.2%</div>
                    </div>
                    <div className="text-black text-xs font-normal">3%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  2+ %
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-11 flex">
                      <div className="text-black text-xs font-normal">7%</div>
                      <div className="text-black text-xs font-normal">5.3%</div>
                    </div>
                    <div className="text-black text-xs font-normal">3%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  1-2%
                </div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-3.5 flex">
                      <div className="text-black text-xs font-normal">42%</div>
                      <div className="text-black text-xs font-normal">38%</div>
                    </div>
                    <div className="text-black text-xs font-normal">20%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  Bkt3
                </div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-[47px] flex">
                      <div className="text-black text-xs font-normal">350</div>
                      <div className="text-black text-xs font-normal">310</div>
                    </div>
                    <div className="text-black text-xs font-normal">250</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  RPC %
                </div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-[30px] flex">
                      <div className="text-black text-xs font-normal">8%</div>
                      <div className="text-black text-xs font-normal">10%</div>
                    </div>
                    <div className="text-black text-xs font-normal">15%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[356px] h-[917px] p-4 bg-violet-50 rounded-xl shadow flex-col justify-start items-start gap-3 inline-flex">
        <div className="px-2 py-1 bg-white rounded border border-slate-400 justify-center items-center gap-1 inline-flex">
          <div className="text-black text-[13px] font-normal">
            STEP 1: Monitoring & DIagnostics
          </div>
        </div>
        <div className="h-[116px] px-3 py-2 bg-white rounded-xl shadow flex-col justify-start items-center gap-1 flex">
          <div className="flex-col justify-center items-center flex">
            <div className="text-yellow-400 text-[32px] font-medium">05</div>
            <div className="text-black text-sm font-medium">Hotspots</div>
          </div>
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="w-3.5 h-3.5 relative">
              <div className="w-3.5 h-3.5 left-0 top-0 absolute bg-zinc-300" />
            </div>
            <div className="text-black text-[10px] font-normal tracking-tight">
              +2 vs last month
            </div>
          </div>
          <div className="text-gray-400 text-xs font-normal leading-[18px] tracking-tight">
            Potential risk: $250k
          </div>
        </div>
        <div className="h-[354px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex">
          <div className="h-[78px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-between items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-medium">
                Risk Monitoring
              </div>
              <div className="px-3 py-1 rounded-[100px] justify-center items-center gap-1 flex">
                <div className="px-1 justify-center items-center flex">
                  <div className="text-center text-slate-500 text-xs font-medium leading-tight tracking-tight">
                    Review
                  </div>
                </div>
                <div className="w-[18px] h-[18px] relative" />
              </div>
            </div>
            <div className="self-stretch p-3 bg-white border-t border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-400 text-xs font-normal leading-[18px]">
                Metrics
              </div>
              <div className="w-[58px] text-center text-gray-400 text-xs font-normal leading-[18px]">
                Jul
              </div>
              <div className="w-[58px] text-center text-gray-400 text-xs font-normal leading-[18px]">
                Jun
              </div>
            </div>
          </div>
          <div className="self-stretch h-[252px] border-gray-100 flex-col justify-start items-start flex">
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Portfolio
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="text-gray-900 text-sm font-normal leading-[21px]">
                Performance
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Distribution
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Production
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-b border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Agency
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-2.5 bg-white border-gray-100 justify-between items-start gap-[183px] inline-flex">
              <div className="w-[83px] text-gray-900 text-sm font-normal leading-[21px]">
                Watchlist
              </div>
              <div className="w-[58px] h-[22px] pl-[18.50px] pr-[17.50px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                  <div className="w-[22px] h-[22px] bg-slate-500 rounded-full" />
                </div>
              </div>
              <div className="w-[58px] h-[22px] px-[18px] justify-center items-center flex">
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex">
                  <div className="w-[22px] h-[22px] bg-white rounded-full shadow border border-slate-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[324px] h-[354px] p-3 bg-white rounded-xl shadow flex-col justify-start items-start flex">
          <div className="self-stretch grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-between items-center gap-2 inline-flex">
              <div className="text-black text-sm font-medium">Hotspots</div>
              <div className="px-3 py-1 rounded-[100px] justify-center items-center gap-1 flex">
                <div className="px-1 justify-center items-center flex">
                  <div className="text-center text-slate-500 text-xs font-medium leading-tight tracking-tight">
                    Review
                  </div>
                </div>
                <div className="w-[18px] h-[18px] relative" />
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-0.5 flex">
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="text-black text-sm font-normal">Entry %</div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-9 flex">
                      <div className="text-black text-xs font-normal">6%</div>
                      <div className="text-black text-xs font-normal">4.2%</div>
                    </div>
                    <div className="text-black text-xs font-normal">3%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  2+ %
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-11 flex">
                      <div className="text-black text-xs font-normal">7%</div>
                      <div className="text-black text-xs font-normal">5.3%</div>
                    </div>
                    <div className="text-black text-xs font-normal">3%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  1-2%
                </div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-3.5 flex">
                      <div className="text-black text-xs font-normal">42%</div>
                      <div className="text-black text-xs font-normal">38%</div>
                    </div>
                    <div className="text-black text-xs font-normal">20%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  Bkt3
                </div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-[47px] flex">
                      <div className="text-black text-xs font-normal">350</div>
                      <div className="text-black text-xs font-normal">310</div>
                    </div>
                    <div className="text-black text-xs font-normal">250</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="self-stretch px-3 py-2 rounded-lg border justify-between items-center gap-10 inline-flex">
                <div className="w-[49px] text-black text-sm font-normal">
                  RPC %
                </div>
                <div className="w-[182px] flex-col justify-center items-start inline-flex">
                  <div className="self-stretch justify-between items-start gap-[15px] inline-flex">
                    <div className="justify-start items-start gap-[30px] flex">
                      <div className="text-black text-xs font-normal">8%</div>
                      <div className="text-black text-xs font-normal">10%</div>
                    </div>
                    <div className="text-black text-xs font-normal">15%</div>
                  </div>
                  <div className="w-[182px] h-[18px] relative">
                    <div className="w-[182px] h-2 left-[-0.50px] top-0 absolute bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RankMonitoring;
