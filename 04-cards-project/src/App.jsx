
import Card from './components/Card'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/736x/68/3d/9a/683d9a1a8150ee8b29bfd25d46804605.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.qbsTDbB9qKP6pBQ0Rl9bpQHaEK?pid=Api&h=220&P=0",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.TPeHfsdX-bWw_vlZ4X59XgHaEK?pid=Api&h=220&P=0",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.douAQqLQCydHXDqsPfOcpwHaEK?pid=Api&h=220&P=0",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.pNt3eE2adoxOx-UWzhBJogHaE6?pid=Api&h=220&P=0",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.AC0iUF7KyK0iqL7HZ2JzcQHaD5?pid=Api&h=220&P=0",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/DtGtLda47VdS8pE2iJLbBZ.jpg",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Graphic Designer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.oOFzZ5PWXPcM9JqPf_rt9QHaHa?pid=Api&h=220&P=0",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.3Hp8iRmblKVcbBgTSDXfRAHaE8?pid=Api&h=220&P=0",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    post: "Software Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.zf8g1tolI3HRPumaeETgcAHaEK?pid=Api&h=220&P=0",
    companyName: "Tesla",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  }
];
  
  

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){

        
        return <div key= {idx}>
          <Card  company={elem.companyName} post={elem.post}  location={elem.location} datePosted={elem.datePosted}
         tag1={elem.tag1} brandLogo={elem.brandLogo}  pay={elem.pay} tag2={elem.tag2}   />
        </div>
      })} 
    </div>
  )
}

export default App
