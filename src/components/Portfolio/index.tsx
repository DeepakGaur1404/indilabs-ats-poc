

type Props = {}

function Portfolio({}: Props) {
  return (
    <>
    <div className='flex flex-'><div className="w-96 h-11 p-3 bg-white border-b border-gray-100 justify-between items-start gap-44 inline-flex">
  <div className="w-20 h-5 relative" />
  <div className="w-20 text-center text-gray-400 text-xs font-normal leading-none">July</div>
  <div className="text-center text-gray-400 text-xs font-normal leading-none">June</div>
  <div className="text-center text-gray-400 text-xs font-normal leading-none">3 Month Average</div>
  <div className="text-center text-gray-400 text-xs font-normal leading-none">Benchmark</div>
</div>

<div className="w-96 h-11 p-3 bg-white border-b border-gray-100 justify-between items-start gap-44 inline-flex">
  <div className="w-24 text-gray-900 text-sm font-normal leading-tight">Book</div>
  <div className="justify-center items-center gap-1 flex">
    <div className="w-3.5 h-3.5 relative">
      <div className="w-3.5 h-3.5 left-0 top-0 absolute bg-zinc-300" />
    </div>
    <div className="text-center text-gray-900 text-sm font-normal leading-tight tracking-tight">251,440</div>
  </div>
  <div className="h-5 justify-center items-center gap-1 flex">
    <div className="w-3.5 h-3.5 relative">
      <div className="w-3.5 h-3.5 left-0 top-0 absolute bg-zinc-300" />
    </div>
    <div className="text-center text-gray-900 text-sm font-normal leading-tight tracking-tight">243,838</div>
  </div>
  <div className="h-5 justify-center items-center gap-1 flex">
    <div className="origin-top-left rotate-90 w-3.5 h-3.5 relative">
      <div className="w-3.5 h-3.5 left-0 top-0 absolute origin-top-left rotate-90 bg-zinc-300" />
    </div>
    <div className="text-center text-gray-900 text-sm font-normal leading-tight tracking-tight">236,704</div>
  </div>
  <div className="h-5 justify-center items-center gap-1 flex">
    <div className="origin-top-left -rotate-180 w-3.5 h-3.5 relative">
      <div className="w-3.5 h-3.5 left-0 top-0 absolute origin-top-left -rotate-180 bg-zinc-300" />
    </div>
    <div className="text-center text-gray-900 text-sm font-normal leading-tight tracking-tight">207,620</div>
  </div>
</div>
</div>



</>
  )
}

export default Portfolio;