import { Users, MousePointer, DollarSign, Package } from 'react-feather'

const chartData = [10, 20, 30, 40, 50];
const maxValue = Math.max(...chartData);

export default function Chartbox() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        {/* Graph Section */}
        <div className="graph-container">
          <div className="h-full flex items-end justify-between gap-4">
            {chartData.map((value, index) => (
              <div key={index} className="flex-1 flex items-end">
                <div 
                  className="graph-bar"
                  style={{ height: `${(value / maxValue) * 100}%` }}
                >

                    <img src='' />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Header */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-800">Active Users</h2>
          <span className="growth-indicator">(+23%) than last week</span>
        </div>

        {/* Stats Grid */}
        <div className="grid-chart grid-cols-1 md:grid-cols-4 gap-6">
          {/* Users Stats */}
          <div className="stat-card-chart">
            <div className="stat-icon-chart bg-dark bg-gradient text-white">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="stat-value-chart">36K</h3>
              <p className="text-gray-600 text-sm">Users</p>
            </div>
          </div>

          {/* Clicks Stats */}
          <div className="stat-card-chart">
            <div className="stat-icon-chart bg-success bg-gradient text-white">
              <MousePointer className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="stat-value-chart">2m</h3>
              <p className="text-gray-600 text-sm">Clicks</p>
            </div>
          </div>

          {/* Sales Stats */}
          <div className="stat-card-chart">
            <div className="stat-icon-chart bg-info bg-gradient text-white">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="stat-value-chart">435$</h3>
              <p className="text-gray-600 text-sm">Sales</p>
            </div>
          </div>

          {/* Items Stats */}
          <div className="stat-card-chart">
            <div className="stat-icon-chart bg-secondary bg-gradient text-white">
              <Package className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="stat-value-chart">43</h3>
              <p className="text-gray-600 text-sm">Items</p>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  )
}
