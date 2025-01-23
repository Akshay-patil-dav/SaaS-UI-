

import { ChevronRight, Star, Target, Building2 } from 'lucide-react';

export default function ProductChart1() {
  return (
    <>
         <div className="achievement-container">
      <div className="achievement-card">
        {/* Header Section */}
        <div className="achievement-header">
          <div className="achievement-title-group">
            <h1 className="achievement-heading">Achievements</h1>
            <p className="achievement-subheading">100k+ sales templates sales</p>
          </div>
          <div className="achievement-dots">
            <div className="achievement-dot achievement-dot-primary"></div>
            <div className="achievement-dot achievement-dot-secondary"></div>
          </div>
        </div>

        {/* Progress Circle */}
        <div className="achievement-progress">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#EFF6FF"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="282.7"
              strokeDashoffset="73.5"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="achievement-progress-text">
            <div className="achievement-progress-percentage">74%</div>
            <div className="achievement-progress-label">My Achievements</div>
          </div>
        </div>

        {/* Achievement List */}
        <div className="achievement-list">
          <div className="achievement-item achievement-item-green">
            <div className="achievement-icon-wrapper achievement-icon-wrapper-green">
              <Star className="achievement-icon achievement-icon-green" />
            </div>
            <div className="achievement-item-content">
              <h3 className="achievement-item-title">Global Stars</h3>
              <p className="achievement-item-subtitle">12 Hours, 4 Commits</p>
            </div>
            <ChevronRight className="achievement-chevron" />
          </div>

          <div className="achievement-item achievement-item-red">
            <div className="achievement-icon-wrapper achievement-icon-wrapper-red">
              <Target className="achievement-icon achievement-icon-red" />
            </div>
            <div className="achievement-item-content">
              <h3 className="achievement-item-title">Focus Keeper</h3>
              <p className="achievement-item-subtitle">6 Hours, 3 Commits</p>
            </div>
            <ChevronRight className="achievement-chevron" />
          </div>

          <div className="achievement-item achievement-item-purple">
            <div className="achievement-icon-wrapper achievement-icon-wrapper-purple">
              <Building2 className="achievement-icon achievement-icon-purple" />
            </div>
            <div className="achievement-item-content">
              <h3 className="achievement-item-title">High Tower</h3>
              <p className="achievement-item-subtitle">34 Hours, 15 Commits</p>
            </div>
            <ChevronRight className="achievement-chevron" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
