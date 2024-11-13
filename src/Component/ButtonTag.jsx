import React from 'react'


const ButtonTag = ({FilterDataFunction,color1,color2,setcolor1,setcolor2}) => {
  return (
    <div>
      <div className='w-full h-10 flex md:justify-normal justify-around items-center gap-1 px-1  mt-1'>
        <button   className={`bg-[#f2f2f2] md:w-52 w-48 h-8 text-[${color1}] border-none outline-none cursor-pointer rounded-xl shadow-sm`} onClick={(e)=>{
           setcolor1('#8A2BE2')
           setcolor2('#b3b3b3')
          FilterDataFunction(e.target.innerText);
        }}>All Restaurents</button>
        <button  className={`bg-[#f2f2f2] md:w-52 w-48 h-8 text-[${color2}] border-none outline-none cursor-pointer rounded-xl shadow-sm`}  onClick={(e)=>{
           console.log(e.target.innerText);
           setcolor2('#8A2BE2')
           setcolor1('#b3b3b3')
           FilterDataFunction(e.target.innerText);
        }}>Top Rated</button>
      </div>
    </div>
  )
}

export default ButtonTag