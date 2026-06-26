import Header from '../components/Header'
import KPICard from '../components/KPICard'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { useState } from 'react'

const kpiData = [
  { title: 'Sales Today', value: '$1,250', trend: '12%', trendUp: true },
  { title: 'Sales This Month', value: '$45,200', trend: '8%', trendUp: false },
  { title: 'Sales This Year', value: '$999,200', trend: '24%', trendUp: true },
]

// Deux jeux de données différents
const monthlySales = [
  { label: 'Week 1', sales: 1200 },
  { label: 'Week 2', sales: 980 },
  { label: 'Week 3', sales: 1500 },
  { label: 'Week 4', sales: 1250 },
]

const yearlySales = [
  { label: 'Jan', sales: 4000 },
  { label: 'Feb', sales: 3000 },
  { label: 'Mar', sales: 5000 },
  { label: 'Apr', sales: 4500 },
  { label: 'May', sales: 6000 },
  { label: 'Jun', sales: 5500 },
  { label: 'Jul', sales: 7000 },
  { label: 'Aug', sales: 6500 },
  { label: 'Sep', sales: 8000 },
  { label: 'Oct', sales: 7500 },
  { label: 'Nov', sales: 9000 },
  { label: 'Dec', sales: 10000 },
]

function Dashboard() {
  const [period, setPeriod] = useState('year')
  const chartData = period === 'year' ? yearlySales : monthlySales

  return (
    <div>
      <Header title="dashboard" />

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            trend={kpi.trend}
            trendUp={kpi.trendUp}
          />
        ))}
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-zinc-900">Sales</h2>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="text-sm border border-zinc-200 rounded-lg px-3 py-1.5 outline-none text-zinc-600"
          >
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: '#a1a1aa' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#a1a1aa' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #e4e4e7',
                fontSize: '13px',
              }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#salesGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
