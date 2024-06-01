import React, { useState } from 'react'
import data from './data'
import './styles.css';


const First = () => {
  const [select,setSelect]=useState(null);
  const[enable,setEnabled]=useState(false);
  const[multi,setMulti]=useState([])
  function firsttime(getid) {
    if (getid === select) {
      setSelect(null);
    } else {
      setSelect(getid);
    }
    // console.log(getid)
    // console.log(select)
  }
  function onoff(enable) {
    console.log(enable)
    setEnabled(!enable);
  }
  function multitime(getid) {
    let copy=[...multi]
    let index=copy.indexOf(getid);
    if(index===-1)copy.push(getid);
    else
    copy.splice(index,1);
  setMulti(copy);
  }
  console.log(select,multi);
  return (
    
      <div className='wrapper'>
        <button onClick={()=>setEnabled(!enable)}>enable me</button>
        <div className='accordian'>
          {
            (data&&data.length>0)?(data.map((item)=>
             <div className='item'>
              <div onClick={enable?()=>multitime(item.id):
                ()=>firsttime(item.id)} className='title'>
                <h1>{item.question}</h1>
                <span>!!!.........!!!</span>

              </div>
              {
                enable?multi.indexOf(item.id)!==-1&&(<div className='content'>{item.answer}</div>):
                select===item.id?
                <div className='content'>{item.answer}</div>
                :null
              }
             </div>
            )):<div>Data not found</div>
          }
        </div>
        
      </div>
    
  )
}

export default First
