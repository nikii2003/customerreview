import './Review.css'

const Review = ({id,name,description,raating,picture,views})=>{
return (
    <div className='review-card'>   
   <div className='both-of-two'>
   <div><img src={picture} className='card-image'/></div>
   <h5 className='client-name'>{name}</h5>
   </div>
      <p>{description}</p>
      <p>{views}</p>
      <p>{raating}</p>
    </div>
)
}
export default Review



