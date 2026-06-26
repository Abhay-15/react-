import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      
      <Card user ='avi' age={19} img ="https://images.unsplash.com/photo-1776389554587-4594c9f5aacd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user ='chamola' age={29} img="https://images.unsplash.com/photo-1769031185750-17e50e35eb73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"/>
      <Card user = "tuffy" age={14} img="https://images.unsplash.com/photo-1781853330027-bbabc95d3577?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
