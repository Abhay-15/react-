
import Card from './components/card'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Abhay Chamola</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi.</p>
      </div>
      <div className='card'>
        <h1>Abhay Chamola</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi.</p>
      </div>
      {Card()}
      {Navbar()}
    </div>
  )
}

export default App
