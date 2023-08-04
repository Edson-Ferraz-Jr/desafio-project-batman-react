import './styles.css';

function ReviewsBox() {
    return (
        <div className="reviews-container">
            <div className="review">
                <img src="http://placehold.co/70x70?text=P" className="review-avatar" />
                <span className="review-author">Pedro</span>

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, minima pariatur perferendis optio qui provident fugit eveniet totam veniam placeat. Voluptatibus accusamus labore necessitatibus id voluptatem provident, voluptates libero eveniet!
            </div>

            <div className="review">
                <img src="http://placehold.co/70x70?text=A" className="review-avatar" />
                <span className="review-author">Ana</span>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem itaque minima recusandae unde fugit reiciendis voluptatem optio magni, blanditiis non, in esse! Natus cupiditate corrupti laboriosam voluptate, cum eaque cumque!
            </div>

            <div className="review">
                <img src="http://placehold.co/70x70?text=J" className="review-avatar" />
                <span className="review-author">José</span>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora incidunt nemo cumque nobis, fugiat optio laudantium quo quam eveniet quae, similique eum quod sapiente ducimus eos rem! Mollitia, cumque cupiditate.
            </div>
        </div>
    )
}

export default ReviewsBox;
