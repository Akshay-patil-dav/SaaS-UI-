

export default function ProgressBar() {
  return (
    <>
    <div className="reviews-container">
      <h2 className="h2" >Reviews</h2>
      
      <div className="review-stat">
        <div className="review-label">Positive Reviews</div>
        <div className="progress-bar">
          <div className="progress-fill positive" style={{width: '80%'}}></div>
        </div>
        <div className="percentage">80%</div>
      </div>

      <div className="review-stat">
        <div className="review-label">Neutral Reviews</div>
        <div className="progress-bar">
          <div className="progress-fill neutral" style={{width: '17%'}}></div>
        </div>
        <div className="percentage">17%</div>
      </div>

      <div className="review-stat">
        <div className="review-label">Negative Reviews</div>
        <div className="progress-bar">
          <div className="progress-fill negative" style={{width: '3%'}}></div>
        </div>
        <div className="percentage">3%</div>
      </div>

      <div className="stats-footer">
        <p>
          More than <span className="highlight">1,500,000</span> developers used Creative Tim products and 
          over <span className="highlight">700,000</span> projects were created.
        </p>
        <button className="view-button">View all reviews</button>
      </div>
    </div>
  </>
  )
}
