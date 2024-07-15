export const Reviews = () => {

  const ReviewItem = (props) => {
    return (
      <div className="review-item">
        <p className="review-name">{props.name}</p>
        <p className="review-title">{props.title}</p>
        <p className="review-desc">{props.desc}</p>
        <div className="stars">
          <span><i className="fa fa-star"></i></span>
          <span><i className="fa fa-star"></i></span>
          <span><i className="fa fa-star"></i></span>
          <span><i className="fa fa-star"></i></span>
          <span><i className="fa fa-star"></i></span>
        </div>
      </div>
    )
  }

  return (
    <div className="reviews" id='reviews'>
      <p className="reviews-header">Reviews</p>
      <div className="reviews-inner">
        <ReviewItem name='John Paul' title='Simple to use!' desc='This trading indicator is very effective and user-friendly. As a beginner I have foudn it useful and I highly recommend it.'/>
        <ReviewItem name='Jane Smith' title='Highly effective!' desc='This trading indicator has significantly improved my trading performance. It is easy to understand and apply.'/>
        <ReviewItem name='Robert Johnson' title='Excellent tool!' desc='I have found this trading indicator to be extremely useful. It provides accurate signals and has helped me make profitable trades.'/>
        <ReviewItem name='Emily Turner' title='Remarkable!' desc="this is a fake review"/>
      </div>
    </div>
  )
}