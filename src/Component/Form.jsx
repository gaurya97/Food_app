import React, { useEffect, useRef, useState } from 'react'
import { Formconfig } from '../CustomeHooks/Formconfig'
const Form = () => {
  const focusRef =useRef(null);
  useEffect(()=>{
focusRef.current = document.getElementById(1)
console.log('usefocus',focusRef.current);
  },[])
 
     const [data,Setdata]=useState(Formconfig);
    const handdleFormData =(event)=>{
      let newFormConfig =[...Formconfig];
      newFormConfig?.map((e,index)=>{
        if(e.id==event.target.id ){
        console.log(event.target.type);
        if(event.target.type==='checkbox'){
          e.checked=event.target.checked;
          if(e.name=='male'){
            console.log(e.name,e.id+1)
            newFormConfig[index+1].required=false;
            newFormConfig[index+1].checked=!e.checked
          }
          else if(e.name=='female'){
            newFormConfig[index-1].required=false;
            newFormConfig[index-1].checked=!e.checked
          }
         
        }
        else{
      
  
           if(index>0 && newFormConfig[index-1].value==''){
            focusRef.current.focus();
           }
           else{
            e.value=event.target.value;
            focusRef.current =document.getElementById(parseInt(e.id)+1);
           }
        
            
          
          
          
        }
         
          console.log( e.value);
        }
        
       })

      Setdata(newFormConfig);
        
    }
    console.log('data',data);

    const CheakEmptyField =()=>{
      return data.some((e)=>e.value ==='' && e.type=='text')
    }

  //   const handdleFocus =(e)=>{
  // console.log(e);
  // focusRef.current=e;
  //   }

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
        <input onChange={handdleFormData} className='' id={e.id} placeholder={e.Placeholder} key={e.id} type={e.type} name={e.name} checked={e.checked} value={e.value} minLength={e.minlength} required={e.required}   />
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
