const Review = ({ comment, name, fonction, image }) => {
  return (
    <div className="review">
      <h1>Few Words From Our Clients</h1>
      <div className="comment">{comment}</div>
      <div className="clients">
        <div className="client">
          <img src={image} />
          <div className="info">
            <div className="name">{name}</div>
            <div className="function">{fonction}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
