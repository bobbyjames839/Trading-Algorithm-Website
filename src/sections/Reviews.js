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
        <ReviewItem name='John Paul' title='Simple to use!' desc='this is a fake review this is a fake review this is a fake review this is a fake review'/>
        <ReviewItem name='Jane Smith' title='Highly effective!' desc='this is a fake review this is a fake review this is a fake review this is a fake review'/>
        <ReviewItem name='Robert Johnson' title='Excellent tool!' desc='this is a fake review this is a fake review this is a fake review this is a fake review'/>
        <ReviewItem name='Emily Turner' title='Remarkable!' desc="this is a fake review this is a fake review this is a fake review this is a fake review"/>
      </div>
    </div>
  )
}