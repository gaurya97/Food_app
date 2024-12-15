import React,{useRef} from 'react'

const UseDebounce = () => {
    let Timer =useRef(null)
  return (cb,Delay,el)=>{
    console.log('before clearing Timer the Previuos Timer Id - ',Timer.current);
    clearTimeout(Timer.current);
    Timer.current = setTimeout(()=>{
        console.log(el.target.value);
       cb(el);
    },Delay)
console.log('the new Timer Id - ',Timer);
  }
}

export default UseDebounce
 