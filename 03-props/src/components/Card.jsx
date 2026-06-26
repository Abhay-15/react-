

const Card = (doggy) => {
    console.log(doggy.age,doggy.user)
  return (
    <div className="card">
            <img src={doggy.img} alt="" />
            <h1>{doggy.user} {doggy.age}</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button> 
    </div>
  )
 }

export default Card
