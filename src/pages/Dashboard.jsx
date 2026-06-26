// import Header from '../components/Header'
// import KPICard from '../components/KPICard'

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts'

// import { useState } from 'react'

// const kpiData = [
//   { title: 'Sales Today', value: '$1,250', trend: '12%', trendUp: true },
//   { title: 'Sales This Month', value: '$45,200', trend: '8%', trendUp: false },
//   { title: 'Sales This Year', value: '$999,200', trend: '24%', trendUp: true },
// ]

// // Deux jeux de données différents
// const monthlySales = [
//   { label: 'Week 1', sales: 1200 },
//   { label: 'Week 2', sales: 980 },
//   { label: 'Week 3', sales: 1500 },
//   { label: 'Week 4', sales: 1250 },
// ]

// const yearlySales = [
//   { label: 'Jan', sales: 4000 },
//   { label: 'Feb', sales: 3000 },
//   { label: 'Mar', sales: 5000 },
//   { label: 'Apr', sales: 4500 },
//   { label: 'May', sales: 6000 },
//   { label: 'Jun', sales: 5500 },
//   { label: 'Jul', sales: 7000 },
//   { label: 'Aug', sales: 6500 },
//   { label: 'Sep', sales: 8000 },
//   { label: 'Oct', sales: 7500 },
//   { label: 'Nov', sales: 9000 },
//   { label: 'Dec', sales: 10000 },
// ]

// function Dashboard() {
//   const [period, setPeriod] = useState('year')
//   const chartData = period === 'year' ? yearlySales : monthlySales

//   return (
//     <div>
//       <Header title="dashboard" />

//       {/* KPI Cards */}
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {kpiData.map((kpi) => (
//           <KPICard
//             key={kpi.title}
//             title={kpi.title}
//             value={kpi.value}
//             trend={kpi.trend}
//             trendUp={kpi.trendUp}
//           />
//         ))}
//       </div>

//       {/* Sales Chart */}
//       <div className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm mb-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-base font-semibold text-zinc-900">Sales</h2>
//           <select
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             className="text-sm border border-zinc-200 rounded-lg px-3 py-1.5 outline-none text-zinc-600"
//           >
//             <option value="month">This Month</option>
//             <option value="year">This Year</option>
//           </select>
//         </div>

//         <ResponsiveContainer width="100%" height={220}>
//           <AreaChart data={chartData}>
//             <defs>
//               <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
//                 <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
//             <XAxis
//               dataKey="label"
//               tick={{ fontSize: 12, fill: '#a1a1aa' }}
//               axisLine={false}
//               tickLine={false}
//             />
//             <YAxis
//               tick={{ fontSize: 12, fill: '#a1a1aa' }}
//               axisLine={false}
//               tickLine={false}
//             />
//             <Tooltip
//               contentStyle={{
//                 borderRadius: '8px',
//                 border: '1px solid #e4e4e7',
//                 fontSize: '13px',
//               }}
//             />
//             <Area
//               type="monotone"
//               dataKey="sales"
//               stroke="#22c55e"
//               strokeWidth={2}
//               fill="url(#salesGradient)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import Header from '../components/Header'
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

// ---------- Mock data ----------
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
const salesStats = [
  { value: '$1,250', label: 'Sales Today', up: true },
  { value: '$45,200', label: 'Sales this month', up: false },
  { value: '$999,200', label: 'Sales this year', up: true },
]
const orderStats = [
  { icon: '📦', value: 64, label: 'Ongoing' },
  { icon: '✉️', value: 137, label: 'Delivered' },
  { icon: '🚚', value: 201, label: 'Total Orders' },
]
const orders = [
  {
    restaurant: 'Mackay St.',
    order: '2×Veggie, 1×MissBean',
    id: 'LK2153',
    value: 45,
    eta: '2:13s',
  },
  {
    restaurant: 'Greenside St',
    order: '1×Veggie Delight',
    id: 'HJ7656',
    value: 15,
    eta: '12:03s',
  },
  {
    restaurant: 'Houston Ave.',
    order: '7×AvoClassic, 3×Soda',
    id: 'KL9804',
    value: 20,
    eta: '17:02s',
  },
  {
    restaurant: 'Mackay St.',
    order: '2×Veggie',
    id: 'BH8902',
    value: 35,
    eta: '7:12s',
  },
  {
    restaurant: 'King James St.',
    order: '1×Veggie, 1×AvoClassic',
    id: 'ZR7926',
    value: 55,
    eta: '8:23s',
  },
  {
    restaurant: 'Greenside St',
    order: '2×MushyMushy',
    id: 'NJ9047',
    value: 10,
    eta: '9:12s',
  },
]
const driversShort = [
  {
    name: 'Sedda Chaba',
    note: '2 orders being delivered',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    name: 'Nadia diana',
    note: '5 orders being delivered',
    avatar: 'https://i.pravatar.cc/40?img=5',
  },
  {
    name: 'Salah bourwayeh',
    note: 'on a break',
    avatar: 'https://i.pravatar.cc/40?img=12',
  },
]

// ---------- Sub-components ----------
function SalesCard() {
  const [period, setPeriod] = useState('year')
  const chartData = period === 'year' ? yearlySales : monthlySales

  return (
    <div className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm">
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

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 min-w-0">
          <ResponsiveContainer width="100%" height={200}>
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

        {/* Stats à droite */}
        <div className="flex flex-row md:flex-col gap-3 md:w-44 justify-between">
          {salesStats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm ${
                  s.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
                }`}
              >
                {s.up ? '↗' : '↘'}
              </span>
              <div>
                <p className="text-lg font-semibold text-zinc-900 leading-tight">
                  {s.value}
                </p>
                <p className="text-xs text-zinc-400">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OrdersCard() {
  return (
    <div className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm">
      <h2 className="text-base font-semibold text-zinc-900 mb-4">Orders</h2>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {orderStats.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-50 text-lg">
              {s.icon}
            </span>
            <div>
              <p className="text-xl font-semibold text-zinc-900 leading-tight">
                {s.value}
              </p>
              <p className="text-xs text-zinc-400">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-400 border-b border-zinc-100">
              <th className="font-normal py-2 pr-4">Restaurant</th>
              <th className="font-normal py-2 pr-4">Order</th>
              <th className="font-normal py-2 pr-4">Order ID</th>
              <th className="font-normal py-2 pr-4">Value</th>
              <th className="font-normal py-2 pr-4">ETA</th>
              <th className="font-normal py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr
                key={i}
                className="border-b border-zinc-50 hover:bg-zinc-50 transition"
              >
                <td className="py-2.5 pr-4 text-zinc-700">{o.restaurant}</td>
                <td className="py-2.5 pr-4 text-zinc-500">{o.order}</td>
                <td className="py-2.5 pr-4 text-zinc-500">{o.id}</td>
                <td className="py-2.5 pr-4 text-zinc-700 font-medium">
                  ${o.value}
                </td>
                <td className="py-2.5 pr-4 text-zinc-500">{o.eta}</td>
                <td className="py-2.5">
                  <button className="text-green-500 hover:text-green-600 transition">
                    📞
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function OfferCard() {
  return (
    <div className="relative overflow-hidden bg-zinc-800 rounded-xl p-5 text-white">
      <img
        src="/images/avocado.png"
        alt=""
        className="absolute -right-6 -top-4 w-40 h-auto opacity-90 pointer-events-none select-none"
      />
      <div className="relative max-w-[60%]">
        <h2 className="text-base font-semibold mb-2">Current offer</h2>
        <p className="text-sm text-zinc-300 leading-snug mb-4">
          Every purchase of <span className="text-white font-medium">$100</span>{' '}
          or above will be getting a{' '}
          <span className="text-green-400 font-medium">15% discount</span>
        </p>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
          ⚙ Manage offers
        </button>
      </div>
    </div>
  )
}

function DriversCard() {
  return (
    <div className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-zinc-900">Drivers</h2>
        <button className="text-xs text-zinc-400 hover:text-zinc-600 transition">
          See all ›
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {driversShort.map((d) => (
          <div key={d.name} className="flex items-center gap-3">
            <img
              src={d.avatar}
              alt={d.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-zinc-900">{d.name}</p>
              <p className="text-xs text-zinc-400 truncate">{d.note}</p>
            </div>
            <span className="text-lg">🛵</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MapCard() {
  return (
    <button className="relative w-full overflow-hidden bg-zinc-900 rounded-xl p-5 text-left text-white h-32 flex items-end">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, #14532d 0%, transparent 40%), repeating-linear-gradient(45deg, #27272a 0 2px, transparent 2px 14px)',
        }}
      />
      <span className="relative text-sm font-medium flex items-center gap-1">
        Expand map ›
      </span>
    </button>
  )
}

// ---------- Page ----------
function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — main */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <SalesCard />
          <OrdersCard />
        </div>

        {/* Right — sidebar widgets */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <OfferCard />
          <DriversCard />
          <MapCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
