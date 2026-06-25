import React, { useState } from 'react'

const App = () => {
  
  const [title ,setTitle]=useState('')
  const [details ,setDetails]=useState('')
  const[task,setTask] =useState([])

  const submitHandler=(e) =>{
    e.preventDefault()
    const  copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)



    setTitle('')
    setDetails(' ')
  }
  
  const deleteNote =(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
        
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 gap-4 flex-col   p-10 ' >

          <h1 className='text-3xl font-bold'>Add Notes</h1>
          {/* first input */}
           <input
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium outline-none py-2 border-2 rounded'
            value={title}
            onChange= {(e)=>{
              setTitle(e.target.value);
              
            }}
           />
           {/* detailed input */}
        <textarea 
          type="text"
          className='px-5 w-full h-32 font-medium flex flex-row items-start outline-none py-2 border-2 rounded'
          placeholder='write details'
          value={details}
          onChange={(e)=>{ 
            setDetails(e.target.value)
          }}
          />
          <button className='bg-white active:bg-gray-300 font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Notes</button>
        
    
          
      </form>
      <div className='  lg:w-1/2 lg:border-l-2  p-10'>
       <h1 className='text-4xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto'>
        {task.map(function(elem,idx){

          return <div key={idx} className=' flex justify-between flex-col items-start relative h-52  w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-8 bg-[url("https://png.pngtree.com/png-clipart/20231007/original/pngtree-yellow-notepad-ruled-picture-image_13101169.png")]'>
            <div><h3 className='leading-tight text-lg font-bold '>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-sm text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-400 text-white rounded font-bold py-1 text-xs'>delete </button>
          </div>

        })}
        
       </div> 
      </div>
    </div>
  )
}

export default App
