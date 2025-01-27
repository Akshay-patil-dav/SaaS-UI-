
import { Clock } from 'lucide-react';
// import '../styles/WebsiteViews.css';

const data = [
  { day: 'M', value: 45 },
  { day: 'T', value: 38 },
  { day: 'W', value: 20 },
  { day: 'T', value: 25 },
  { day: 'F', value: 45 },
  { day: 'S', value: 55 },
  { day: 'S', value: 70 },
];

const WebsiteViews = () => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="website-views__container dashboard-container">
      <h2 className="website-views__title">Website Views</h2>
      <p className="website-views__subtitle">Last Campaign Performance</p>
      
      <div className="website-views__graph">
        {data.map((item, index) => (
          <div key={index} className="website-views__bar-container">
            <div 
              className="website-views__bar"
              style={{
                height: `${(item.value / maxValue) * 150}px`,
              }}
            />
            <span className="website-views__day">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="website-views__footer">
        <Clock className="website-views__clock-icon" size={16} />
        <span>campaign sent 2 days ago</span>
      </div>
    </div>
  );
};

export default WebsiteViews;