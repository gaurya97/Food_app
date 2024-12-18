import React, { useState } from 'react'
import { Formconfig } from '../CustomeHooks/Formconfig'
const Form = () => {
     const [data,Setdata]=useState({});
    const handdleFormData =(e)=>{

        Setdata((pre)=>{
            if(pre[e.target.name]){
                console.log('jgj')
                pre.e.target.name=e.target.value
            }
            else{
               { pre[e.target.name]=e.target.value}
            }
            });
        
    }
    console.log(data);
  return (
    <>
    <form action="">{Formconfig.map((e,index)=>{
       return( <div className='flex justify-center items-center flex-col' key={index}>
        <div className='flex justify-center items-center p-1 m-1 flex-row' >
        <label className='text-cyan-900 px-2' key={e.lable} htmlFor={e.name}>{e.lable} :</label>
        <input onChange={handdleFormData} className='' placeholder={e.Placeholder} key={e.id} type={e.type} name={e.name} minLength={e.validation.minlength} required={e.validation.required} />
        </div>
        </div>)
      })}
      <div className='grid items-center my-2'>
      <button className='text-center'>submit</button>
      </div>
      
</form>
   
    </>
  )
}

export default Form
