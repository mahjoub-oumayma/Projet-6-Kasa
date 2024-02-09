import FullStar from "../../Asset/images/rate/star-active 1.png"
import EmptyStar from "../../Asset/images/rate/star-inactive 1.png"

function Stars({ data }) {
    const rating =[1, 2, 3, 4, 5]
  return (
    <div className="stars-box">
        {rating.map((score, index) => score >= data.rating ? (
        <img src={EmptyStar} key={"star-" + index} alt="étoile grise"/>
        ) : (
        <img src={FullStar} key={"star-" + index} alt="étoile rouge"/>
        ))}
    </div>
  )
}

export default Stars