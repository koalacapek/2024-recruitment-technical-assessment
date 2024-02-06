import "./card.css";

const StarRating = ({ rating }) => {
  const filledStars = "★".repeat(Math.floor(rating));
  const emptyStars = "☆".repeat(5 - Math.floor(rating));

  return (
    <span className="star-rating">
      {filledStars}
      {emptyStars}
    </span>
  );
};

const Bubble = ({ term }) => {
  return <div className="bubble">{term}</div>;
};

const Card = (props) => {
  const {
    course_prefix,
    course_code,
    course_title,
    average_stars,
    total_reviews,
    offered_terms,
  } = props;
  return (
    <div id="card" className="container">
      <div className="name-rating">
        <h1>
          {course_prefix}
          {course_code}
        </h1>
        <div className="rating-review">
          <div className="star">
            <StarRating rating={average_stars} />
          </div>
          <div className="review">{total_reviews} reviews</div>
        </div>
      </div>
      <div className="desc">{course_title}</div>
      <div className="terms">
        {offered_terms.map((term, idx) => (
          <Bubble key={idx} term={term} />
        ))}
      </div>
    </div>
  );
};

export default Card;
