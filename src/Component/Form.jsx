import React, { useState } from 'react'
import { Formconfig } from '../CustomeHooks/Formconfig'
const Form = () => {
     const [data,Setdata]=useState(Formconfig);
    const handdleFormData =(event)=>{
      let newFormConfig =[...Formconfig];
      newFormConfig?.map((e,index)=>{
        if(e.id==event.target.id){
        // console.log(e);
          e.value=event.target.value;
          console.log( e.value);
        }
        
       })

      Setdata(newFormConfig);
        
    }
    console.log('data',data);

    const CheakEmptyField =()=>{
      return data.some((e)=>e.value==='')
    }

const SubmitForm =(e)=>{
  e.preventDefault();
  console.log(CheakEmptyField());
  if(CheakEmptyField()){
    console.log('field is empty')
  }
  else{
    
    console.log('submit form');
    console.log(data);
  }

}

  return (
    <>
    <form onSubmit={SubmitForm}>{data.map((e,index)=>{
       return( <div className='flex justify-center items-center flex-col' key={index}>
        <div className='flex justify-center items-center p-1 m-1 flex-row' >
        <label className='text-cyan-900 px-2' key={e.lable} htmlFor={e.id}>{e.lable} :</label>
        <input onChange={handdleFormData} className='' id={e.id} placeholder={e.Placeholder} key={e.id} type={e.type} name={e.name} value={e.value} minLength={e.validation.minlength} required={e.validation.required} />
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
