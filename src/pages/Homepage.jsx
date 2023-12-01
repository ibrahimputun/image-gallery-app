import Picture from '../components/Picture'
import data from "../helper/data"

const Homepage = () => {

  return (
    <div className='pictures'>
    {data.map((item,index)=>(
      <Picture card={item} key={index}/>
    ))}
    
    </div>
  )
}

export default Homepage